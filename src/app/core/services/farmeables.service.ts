import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Farmeable } from '../models/farmeable.model';

@Injectable({
  providedIn: 'root'
})
export class FarmeablesService {

  
  public _farmeable: Farmeable[] = [

    {
      id:1,
      name:"onion",
      seconds_to_harvest:6,
      purchase_value:50,
      sale_value:100,
      amount:3,
      image_beggining:"/assets/images/farmeables/onion/onion-beginning.png",
      image_middle:"/assets/images/farmeables/onion/onion-middle.png",
      image_end:"/assets/images/farmeables/onion/onion-complete.png"
    },

  ]


  getFarmeables:BehaviorSubject<Farmeable[]> = new BehaviorSubject(this._farmeable)

  public farmeables$ = this.getFarmeables.asObservable();


  getFarmeableById(id:number){
    var farmeableToReturn = this._farmeable.find(p=>p.id==id)
    return farmeableToReturn;

  }

  addFarmeable(id_farmeable:number, amountGetted:number){

    var farmeable = this.getFarmeableById(id_farmeable)
    if(farmeable != undefined)
    farmeable.amount += amountGetted

  }


  constructor() { 

  }
}
