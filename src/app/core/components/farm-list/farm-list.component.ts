import { Component, OnInit } from '@angular/core';
import { CoreModule } from '../../core.module';
import { FarmService } from '../../services/farm.service';
import { Farm } from '../../models/farm.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-farm-list',
  templateUrl: './farm-list.component.html',
  styleUrls: ['./farm-list.component.scss'],
})
export class FarmListComponent implements OnInit {

  farms:Farm[] = []

  subsr:Subscription;
  constructor(public farmSVC:FarmService) { 
    this.subsr = this.farmSVC.farms$.subscribe(data=>this.farms = data);


  }

  ngOnInit() {


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

}
