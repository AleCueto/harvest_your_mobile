import { Component, OnInit } from '@angular/core';
import { CoreModule } from '../../core.module';
import { FarmService } from '../../services/farm.service';
import { Farm } from '../../models/farm.model';
import { Subscription } from 'rxjs';
import { FarmDetailedComponent } from '../farm-detailed/farm-detailed.component';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-farm-list',
  templateUrl: './farm-list.component.html',
  styleUrls: ['./farm-list.component.scss'],
})
export class FarmListComponent implements OnInit {


  
  farms:Farm[] = []

  subsr:Subscription;
  constructor(public farmSVC:FarmService, private modal:ModalController) { 
    this.subsr = this.farmSVC.farms$.subscribe(data=>this.farms = data);


  }


  
  ngOnInit() {


  }

  async presentForm(id:number){
    const modal = await this.modal.create({
      component:FarmDetailedComponent,
      componentProps: {
        'id': id
      }

    })

    modal.present();
    modal.onDidDismiss().then(result=>{
      if(result){
        console.log(result.data)
        // this.setFarmeable(result.data)
        // this.farmSVC.editFarm(result.data)
        this.farmSVC.editFarm(result.data)
      }

    });


  }

  setActiveFarm(farm:Farm){
    this.farmSVC.setSelectedFarm(farm)
  }

  isEnabled(farm:Farm):boolean{
    return farm.id == this.farmSVC.selectedFarm?.id
  }

  getFarms(){
    return this.farms
  }


  editFarm(id:number){
    this.presentForm(id)
  }

  deleteFarm(id:number){
    this.farmSVC.deleteFarm(id)
  }

}
