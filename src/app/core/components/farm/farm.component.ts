import { Component, Input, OnInit } from '@angular/core';
import { CoreModule } from '../../core.module';
import { Tile } from '../../models/tile.model';
import { TilesService } from '../../services/tiles.service';


@Component({
  selector: 'app-farm',
  templateUrl: './farm.component.html',
  styleUrls: ['./farm.component.scss'],
})
export class FarmComponent implements OnInit {



  //Lista de todas las casillas.
  // tileList:Tile[] = this.tiles._tile

  constructor(private tilesSVC: TilesService) {}

  ngOnInit() {

    
    // console.log(this.tileList)

  }

  
  getTiles(){
    return this.tilesSVC.tiles$
  }

}
