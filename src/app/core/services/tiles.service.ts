import { Injectable } from '@angular/core';
import { Tile } from '../models/tile.model';

@Injectable({
  providedIn: 'root'
})
export class TilesService {

  public tiles:number = 3

  public _tile : Tile[] = [

    {
      farmeable:null, 
      image: ""
    },
    {
      farmeable:null, 
      image: ""
    },
    {
      farmeable:null, 
      image: ""
    },
    {
      farmeable:null, 
      image: ""
    },
    {
      farmeable:null, 
      image: ""
    },
    {
      farmeable:null, 
      image: ""
    },
    {
      farmeable:null, 
      image: ""
    },
    {
      farmeable:null, 
      image: ""
    },
    {
      farmeable:null, 
      image: ""
    },
    {
      farmeable:null, 
      image: ""
    },
    {
      farmeable:null, 
      image: ""
    },
    {
      farmeable:null, 
      image: ""
    }


  ]


  constructor() {


  }
}
