import { Injectable } from '@angular/core';
import { Tile } from '../models/tile.model';

@Injectable({
  providedIn: 'root'
})
export class TilesService {

  public tiles:number = 3

  public _tile : Tile[] = [

    {
      id:1,
      farmeable:null, 
      image: ""
    },
    {
      id:2,
      farmeable:null, 
      image: ""
    },
    {
      id:3,
      farmeable:null, 
      image: ""
    },
    {
      id:4,
      farmeable:null, 
      image: ""
    },
    {
      id:5,
      farmeable:null, 
      image: ""
    },
    {
      id:6,
      farmeable:null, 
      image: ""
    },
    {
      id:7,
      farmeable:null, 
      image: ""
    },
    {
      id:8,
      farmeable:null, 
      image: ""
    },
    {
      id:9,
      farmeable:null, 
      image: ""
    },
    {
      id:10,
      farmeable:null, 
      image: ""
    },
    {
      id:11,
      farmeable:null, 
      image: ""
    },
    {
      id:12,
      farmeable:null, 
      image: ""
    }


  ]


  constructor() {


  }
}
