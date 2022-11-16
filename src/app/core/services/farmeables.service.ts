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
      days_to_harvest:1,
      create_date:"now",
      purchase_value:50,
      sale_value:100
    }



  ]



  constructor() { 

  }
}
