import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { BehaviorSubject, Observable } from 'rxjs';
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
      image: "",
      create_date:null,
      canRecolect:false,
      imageFarmeable:""
    },
    {
      id:2,
      farmeable:null, 
      image: "",
      create_date:null,
      canRecolect:false,
      imageFarmeable:""


    },
    {
      id:3,
      farmeable:null, 
      image: "",
      create_date:null,
      canRecolect:false,
      imageFarmeable:""


    },
    {
      id:4,
      farmeable:null, 
      image: "",
      create_date:null,
      canRecolect:false,
      imageFarmeable:""
      

    },
    {
      id:5,
      farmeable:null, 
      image: "",
      create_date:null,
      canRecolect:false,
      imageFarmeable:""


    },
    {
      id:6,
      farmeable:null, 
      image: "",
      create_date:null,
      canRecolect:false,
      imageFarmeable:""


    },
    {
      id:7,
      farmeable:null, 
      image: "",
      create_date:null,
      canRecolect:false,
      imageFarmeable:""


    },
    {
      id:8,
      farmeable:null, 
      image: "",
      create_date:null,
      canRecolect:false,
      imageFarmeable:""


    },
    {
      id:9,
      farmeable:null, 
      image: "",
      create_date:null,
      canRecolect:false,
      imageFarmeable:""
    
    },
    {
      id:10,
      farmeable:null, 
      image: "",
      create_date:null,
      canRecolect:false,
      imageFarmeable:""

    
    },
    {
      id:11,
      farmeable:null, 
      image: "",
      create_date:null,
      canRecolect:false,
      imageFarmeable:""

    
    },
    {
      id:12,
      farmeable:null, 
      image: "",
      create_date:null,
      canRecolect:false,
      imageFarmeable:""
    
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

  constructor() {


  }
}
