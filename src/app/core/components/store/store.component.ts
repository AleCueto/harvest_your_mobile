import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { lastValueFrom, Observable } from 'rxjs';
import { CoreModule } from '../../core.module';
import { Farmeable } from '../../models/farmeable.model';
import { FarmService } from '../../services/farm.service';
import { FarmeablesService } from '../../services/farmeables.service';
import { MoneyService } from '../../services/money.service';
import { TilesService } from '../../services/tiles.service';


interface CheckoutFarmeable {
  farmeable: number,
  amount:number 
}

interface TileBuyObject{

  amount:number;

}

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent implements OnInit {

  form_farmeable:FormGroup;
  newFarmName:string = ""

  storeSelected:string = "farmeables"

  price:number = 0;
  tilePrice:number = 100;
  farmPrice:number = 300;
  tilesToBuy:number = 0;

  form_tile:FormGroup;



  cart:Array<CheckoutFarmeable> = []

  
  constructor(private moneySVC:MoneyService, private fb:FormBuilder, private modal:ModalController, private farmeableSVC:FarmeablesService, private tileSCV:TilesService, private farmSVC:FarmService, private fbTile:FormBuilder ) { 

      this.form_farmeable = this.fb.group({
        farmeable:['', [Validators.required]],
        amount:['', [Validators.required]],
    });

      this.form_tile = this.fbTile.group({
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
    this.payFarmeables(this.form_farmeable.value);
    
  }

  onSubmitTile(){
    this.createTiles(this.form_tile.value);

  }


  selectItem(storenName:string){
    this.storeSelected = storenName
  }

  createFarm(){
    
    
    if(this.moneySVC.getMoney.value >= this.farmPrice){
      this.moneySVC.payMoney(this.farmPrice)
      this.farmSVC.createFarm(this.newFarmName)
      this.farmSVC.setSelectedFarm(this.farmSVC.getLasFarm()) 
    } else{
      
    }
    
    console.log(this.farmSVC.getLasFarm())
  }

  getMoney(){
    return this.moneySVC.money$;
  }



  createTiles(cantity:TileBuyObject){

    var newTilePrice = cantity.amount * this.tilePrice;


    if(this.moneySVC.getMoney.value >= newTilePrice && this.farmSVC.selectedFarm?.id){
      for(let i = 0; i < cantity.amount; i++){
        this.moneySVC.payMoney(this.tilePrice)
        this.tileSCV.addTile(this.farmSVC.selectedFarm?.id)
      }
    } else{
      
    }


  }


  
}