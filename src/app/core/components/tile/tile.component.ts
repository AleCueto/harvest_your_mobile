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
import { take, takeWhile } from 'rxjs';

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
    private modal:ModalController
    
    ) { }

  ngOnInit() {

  }

  itemClicked(){
    //ABRIR MODAL EN EL QUE ELEGIR EL FARMEABLE
    // console.log(this.tileSVC._tile.find(i=>i.id == this.tileInput?.id))
    this.presentForm()
    // console.log("Has clicado la casilla número " + this.tileInput?.id)
    // if(this.tileInput != undefined){
    //   this.setFarmeable(this.farmeableSVC._farmeable.find(i => {return i.name == "puerro"})!);
    // }

  }


  setFarmeable(farmeable:Farmeable){

    // this.tileInput!.farmeable = this.farmeableSVC._farmeable.find(i => {return i.name == "puerro"})!;
    var tile = this.tileSVC._tile.find(i=>i.id == this.tileInput?.id)
    if(this.tileInput != undefined){
      tile!.farmeable = farmeable;
      tile!.create_date = moment();
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
        next(_moment){
          if(_moment.isAfter(moment_to_harvest)){
            console.log("Puedes recoger: " + tile?.farmeable?.name)
            
          }else{
            
            // console.log(tile?.create_date?.add(tile?.farmeable?.days_to_harvest, "seconds"))
            console.log("contador para recoger " + tile?.farmeable?.name + ":" + index)

            index++
          }
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
