import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { lastValueFrom, Observable } from 'rxjs';
import { CoreModule } from '../../core.module';
import { Farmeable } from '../../models/farmeable.model';
import { FarmeablesService } from '../../services/farmeables.service';
import { MoneyService } from '../../services/money.service';


interface CheckoutFarmeable {
  farmeable: number,
  amount:number 
}


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent implements OnInit {

  form:FormGroup;
  

  price:number = 0;

  cart:Array<CheckoutFarmeable> = []

  
  constructor(private moneySVC:MoneyService, private fb:FormBuilder, private modal:ModalController, private farmeableSVC:FarmeablesService) { 

      this.form = this.fb.group({
        farmeable:['', [Validators.required]],
        amount:['', [Validators.required]],
    });
  }
  



  ngOnInit() {
    this.price = 0
    
  }


  async payFarmeables(value: CheckoutFarmeable){
    var farmeable = this.farmeableSVC.getFarmeableById(value.farmeable)
    if(value != null && farmeable){
      this.price = farmeable.purchase_value * value.amount


      //Restamos el dinero
        //if(await lastValueFrom(this.moneySVC.money$) >= this.price)
        if(this.moneySVC.getMoney.value >= this.price){
          this.moneySVC.payMoney(this.price)
          this.farmeableSVC.addFarmeable(value.farmeable, value.amount)
        } else{
          
        }
    }

  }


  // getMoney():Observable<number>{
  //   return this.moneySVC.money$;
  // }


  // refresh(ev) {
  //   setTimeout(() => {
  //     ev.detail.complete();
  //   }, 3000);
  // }

addToChart(value: CheckoutFarmeable){

  var farmeable = this.farmeableSVC.getFarmeableById(value.farmeable)
  if(value != null && farmeable)
    this.cart.push(value)

}


  onSubmit(){
    this.payFarmeables(this.form.value);
  }



}