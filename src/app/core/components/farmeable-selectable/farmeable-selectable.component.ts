import { Component, Input, OnInit } from '@angular/core';
import { CoreModule } from '../../core.module';
import { Farmeable } from '../../models/farmeable.model';
import { FarmeablesService } from '../../services/farmeables.service';

@Component({
  selector: 'app-farmeable-selectable',
  templateUrl: './farmeable-selectable.component.html',
  styleUrls: ['./farmeable-selectable.component.scss'],
})
export class FarmeableSelectableComponent implements OnInit {

  itemSelected:Farmeable | undefined

  constructor(private farmeableSVC:FarmeablesService) { }

  
  ngOnInit() {
  }


  getFarmeables(){
    return this.farmeableSVC._farmeable
  }

  selectItem(farmSelected:Farmeable){
    this.itemSelected = farmSelected
  }

}
