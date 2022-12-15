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
    {
      id:2,
      name:"orange",
      seconds_to_harvest:6,
      purchase_value:50,
      sale_value:100,
      amount:3,
      image_beggining:"/assets/images/farmeables/orange/orange-beginning.png",
      image_middle:"/assets/images/farmeables/orange/orange-middle.png",
      image_end:"/assets/images/farmeables/orange/orange-complete.png"
    },

  ]

    id:number = this._farmeable.length+1;
    constructor() { 
  
    }

  getFarmeables:BehaviorSubject<Farmeable[]> = new BehaviorSubject(this._farmeable)

  public farmeables$ = this.getFarmeables.asObservable();


  getFarmeableById(id:number){
    var farmeableToReturn = this._farmeable.find(p=>p.id==id);
    return farmeableToReturn;

  }

  addFarmeable(id_farmeable:number, amountGetted:number){

    var farmeable = this.getFarmeableById(id_farmeable);
    if(farmeable != undefined)
    farmeable.amount += amountGetted;

  }

  createFarmeable(farmeable:Farmeable){
    //IMAGE WHILE WE DONT HAVE IMAGES
    farmeable.image_beggining = "https://picsum.photos/200"
    farmeable.image_middle = "https://picsum.photos/200"
    farmeable.image_end = "https://picsum.photos/200"


    farmeable.id = this.id++;
    this._farmeable.push(farmeable);
    this.getFarmeables.next(this._farmeable);
  }


  updateFarmeable(farmeable:Farmeable){

    var _farmeable = this._farmeable.find(f => f.id == farmeable.id)

    if(_farmeable){
      _farmeable.name = farmeable.name;
      _farmeable.amount = farmeable.amount;
      _farmeable.seconds_to_harvest = farmeable.seconds_to_harvest;
      _farmeable.purchase_value = farmeable.purchase_value;
      _farmeable.sale_value = farmeable.sale_value;
      _farmeable.image_beggining = farmeable.image_beggining;
      farmeable.image_middle = farmeable.image_middle;
      farmeable.image_end = farmeable.image_end;

      this.getFarmeables.next(this._farmeable);
    }

  }



  deleteFarmeableById(id:number){
    this._farmeable = this._farmeable.filter(f=>f.id != id);
    this.getFarmeables.next(this._farmeable);
  }

}
