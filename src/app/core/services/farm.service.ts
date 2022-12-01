import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Farm } from '../models/farm.model';

import { Tile } from '../models/tile.model';
import { TilesService } from './tiles.service';



@Injectable({
  providedIn: 'root'
})
export class FarmService {

  selectedFarm:Farm|null = null

  public _farm: Farm[] = [

    {
      id:1,
      name:"Granja principal",
      tileAmount:12,
      tiles: [],

    },



  ]

  index = this._farm.length


  constructor(private tileSVC:TilesService) {  }


  public addTilesToFarm(farm:Farm){

    for(let i = 0; i < farm.tileAmount; i++){
      farm.tiles.push(this.tileSVC.createTile(farm))
    }

  }

  public createFarm(nameFarm:string){

    //Creamos la granja que insertaremos
    var newFarm:Farm = {
      id:this.index,
      name:nameFarm,
      tileAmount:12,
      tiles: [],
    }

    this._farm.push(newFarm)

    this.addTilesToFarm(newFarm)

    this.index++;

  }

  getLasFarm():Farm{
    return this._farm[this._farm.length -1]
  }

  
    private farmSubject:BehaviorSubject<Farm|null> = new BehaviorSubject(this.selectedFarm);
    public farm$ = this.farmSubject.asObservable();
  
    

  setSelectedFarm(selected_Farm:Farm){

    this.selectedFarm = selected_Farm
    this.farmSubject.next(selected_Farm)
  }

  
}

