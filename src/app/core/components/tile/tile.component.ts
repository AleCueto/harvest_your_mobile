import { Component, Input, OnInit } from '@angular/core';
import { Tile } from '../../models/tile.model';
import { CoreModule } from '../../core.module';
import { FarmeablesService } from '../../services/farmeables.service';
import { Farmeable } from '../../models/farmeable.model';
import { ModalController } from '@ionic/angular';

//ERROR: NO ENTIENDO POR QUE NO ME LO IMPORTA DEL CORE
import { TileDetailComponent } from '../tile-detail/tile-detail.component';
import { TilesService } from '../../services/tiles.service';

import * as moment from 'moment-timezone';
import { ignoreElements, take, takeWhile } from 'rxjs';
import { MoneyService } from '../../services/money.service';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
})
export class TileComponent implements OnInit {

  @Input() tileInput:Tile | undefined;


  constructor(
    private farmeableSVC:FarmeablesService,
    private tileSVC:TilesService,
    private modal:ModalController,
    private moneySVC:MoneyService
    ) { }

  ngOnInit() {
  }

  itemClicked(){
    //ABRIR MODAL EN EL QUE ELEGIR EL FARMEABLE
    // console.log(this.tileSVC._tile.find(i=>i.id == this.tileInput?.id))
    if(this.tileInput!=undefined){
      
      var tile = this.tileSVC._tile.find(i=>i.id == this.tileInput?.id)
      
      if(tile?.farmeable == null || tile?.farmeable == undefined){
        this.presentForm()
      } else{
        if(tile?.canRecolect){
          this.moneySVC.earnMoney(tile?.farmeable.sale_value)
          this.cleanTile(tile)
        }else{
          console.log("Está lleno y no puedes recoger")
        }
      }

    }
    // console.log("Has clicado la casilla número " + this.tileInput?.id)
    // if(this.tileInput != undefined){
    //   this.setFarmeable(this.farmeableSVC._farmeable.find(i => {return i.name == "puerro"})!);
    // }

  }

  cleanTile(tile:Tile){
    tile.farmeable = null;
    tile.canRecolect = false
  }


  setFarmeable(farmeable:Farmeable){

    // this.tileInput!.farmeable = this.farmeableSVC._farmeable.find(i => {return i.name == "puerro"})!;
    var tile = this.tileSVC._tile.find(i=>i.id == this.tileInput?.id)
    if(this.tileInput != undefined){
      tile!.farmeable = farmeable;
      console.log(tile?.id + " |" + tile?.farmeable.name)
      tile!.create_date = moment();
      tile!.image = tile!.farmeable.image_beggining
      // console.log(tile)
      var moment_to_harvest = tile?.create_date?.add(tile?.farmeable?.seconds_to_harvest, "seconds")
    }
    // this.tileInput!.farmeable = farmeable;


    var index = 1

    //Creation observable to control time
    var time_farming = this.tileSVC.actual_time
    .pipe(take(tile?.farmeable?.seconds_to_harvest || 1));

    time_farming.subscribe(
      {
        next(_moment:moment.Moment){
          
          if(tile!.farmeable){

          if(_moment.isAfter(moment_to_harvest)){
            console.log("Puedes recoger: " + tile?.farmeable?.name)
            tile!.image = tile!.farmeable.image_end
            tile!.canRecolect = true;
          }else if(index > tile!.farmeable.seconds_to_harvest/2){
          // console.log(_moment.toISOString(), moment_to_harvest?.toISOString());
          // console.log("Estoy dentro");
          tile!.image = tile!.farmeable.image_middle
          }
          
        }
            //console.log(tile?.create_date?.add(tile?.farmeable?.days_to_harvest, "seconds"))
            console.log("contador para recoger " + tile?.farmeable?.name + ":" + index)
            index++
        }
      }
    )
  }


  async presentForm(){
    const modal = await this.modal.create({
      component:TileDetailComponent
    })
    modal.present();
    modal.onDidDismiss().then(result=>{
      if(result){
        // console.log(result.data)
        this.setFarmeable(result.data)
      }

    });


  }

}
