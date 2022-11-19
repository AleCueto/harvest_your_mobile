import { Injectable } from '@angular/core';
import { Farmeable } from '../models/farmeable.model';

@Injectable({
  providedIn: 'root'
})
export class FarmeablesService {

  public _farmeable: Farmeable[] = [

    {
      id:1,
      name:"puerro",
      seconds_to_harvest:20,
      purchase_value:50,
      sale_value:100,
      amount:3,
      image: "/assets/images/puerro.png"
    },

    {
      id:2,
      name:"marihuana",
      seconds_to_harvest:10,
      purchase_value:50,
      sale_value:100,
      amount:1,
      image: "/assets/images/hoja.webp"
    },
    

  ]


  getFarmeables(): Farmeable[]{
    return(this._farmeable)
  }


  constructor() { 

  }
}
