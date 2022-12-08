import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { BehaviorSubject, Observable } from 'rxjs';
import { Tile } from '../models/tile.model';
import { Farm } from '../models/farm.model';


@Injectable({
  providedIn: 'root'
})
export class TilesService {

  public index:number = 0;

  public tiles:number = 3

  public _tile : Tile[] = [

    {
      id:0,
      farmeable:null, 
      image: "",
      create_date:null,
      canRecolect:false,
      imageFarmeable:"",
      farms:[0]
    },
    {
      id:1,
      farmeable:null, 
      image: "",
      create_date:null,
      canRecolect:false,
      imageFarmeable:"",
      farms:[0]
    },
    {
      id:2,
      farmeable:null, 
      image: "",
      create_date:null,
      canRecolect:false,
      imageFarmeable:"",
      farms:[0]


    },
    {
      id:3,
      farmeable:null, 
      image: "",
      create_date:null,
      canRecolect:false,
      imageFarmeable:"",
      farms:[0]


    },
    {
      id:4,
      farmeable:null, 
      image: "",
      create_date:null,
      canRecolect:false,
      imageFarmeable:"",
      farms:[0]
      

    },
    {
      id:5,
      farmeable:null, 
      image: "",
      create_date:null,
      canRecolect:false,
      imageFarmeable:"",
      farms:[0]


    },
    {
      id:6,
      farmeable:null, 
      image: "",
      create_date:null,
      canRecolect:false,
      imageFarmeable:"",
      farms:[0]


    },
    {
      id:7,
      farmeable:null, 
      image: "",
      create_date:null,
      canRecolect:false,
      imageFarmeable:"",
      farms:[0]


    },
    {
      id:8,
      farmeable:null, 
      image: "",
      create_date:null,
      canRecolect:false,
      imageFarmeable:"",
      farms:[0]

    },
    {
      id:9,
      farmeable:null, 
      image: "",
      create_date:null,
      canRecolect:false,
      imageFarmeable:"",
      farms:[0]
    
    },
    {
      id:10,
      farmeable:null, 
      image: "",
      create_date:null,
      canRecolect:false,
      imageFarmeable:"",
      farms:[0]

    
    },
    {
      id:11,
      farmeable:null, 
      image: "",
      create_date:null,
      canRecolect:false,
      imageFarmeable:"",
      farms:[0]
    
    }
  ]


  private tilesSubject:BehaviorSubject<Tile[]> = new BehaviorSubject(this._tile)
  public tiles$ = this.tilesSubject.asObservable();

  //Observable que devuelve el momento actual cada segundo
  public actual_time = new Observable<moment.Moment>((observer)=> {

    setInterval(() => {
      observer.next(moment())
    }, 1000);

  })


  addTile(newId:number){
    
    var index = this._tile.length

    var newEmptyTile:Tile = {

      id:index,
      farmeable:null, 
      image: "",
      create_date:null,
      canRecolect:false,
      imageFarmeable:"",
      farms:[newId]

    }

    this._tile.push(newEmptyTile)
  }


  public createTile(initialFarm:Farm):Tile{

    var index = this._tile.length
  
    var newEmptyTile:Tile = {

      id:index,
      farmeable:null, 
      image: "",
      create_date:null,
      canRecolect:false,
      imageFarmeable:"",
      farms:[initialFarm.id]

    }

    //Prob-1: ESTO AÑADE UN NUEVO TILE CADA VEZ?

    this._tile.push(newEmptyTile)
    
    return newEmptyTile

  }

  constructor() {


  }


  
}
