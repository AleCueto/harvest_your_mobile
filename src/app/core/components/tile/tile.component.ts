import { Component, Input, OnInit } from '@angular/core';
import { Tile } from '../../models/tile.model';
import { CoreModule } from '../../core.module';
import { FarmeablesService } from '../../services/farmeables.service';
import { Farmeable } from '../../models/farmeable.model';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
})
export class TileComponent implements OnInit {

  @Input() tileInput:Tile | undefined;



  constructor(private farmeableSVC:FarmeablesService) { }

  ngOnInit() {

  }

  itemClicked(){
    //ABRIR MODAL EN EL QUE ELEGIR EL FARMEABLE
    console.log("Has clicado la casilla número " + this.tileInput?.id)
    if(this.tileInput != undefined){
      this.setFarmeable(this.farmeableSVC._farmeable.find(i => {return i.name == "puerro"})!);
    }
  }


  setFarmeable(farmeable:Farmeable){
    // this.tileInput!.farmeable = this.farmeableSVC._farmeable.find(i => {return i.name == "puerro"})!;
    this.tileInput!.farmeable = farmeable;
  }

  async presentForm(){
    
  }

}
