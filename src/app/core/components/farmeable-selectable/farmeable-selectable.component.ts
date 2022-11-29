import { Component, forwardRef, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonAccordionGroup } from '@ionic/angular';
import { CoreModule } from '../../core.module';
import { Farmeable } from '../../models/farmeable.model';
import { FarmeablesService } from '../../services/farmeables.service';



export const USER_PROFILE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FarmeableSelectableComponent),
  multi: true
};



@Component({
  selector: 'app-farmeable-selectable',
  templateUrl: './farmeable-selectable.component.html',
  styleUrls: ['./farmeable-selectable.component.scss'],
  providers: [USER_PROFILE_VALUE_ACCESSOR]
})
export class FarmeableSelectableComponent implements OnInit, ControlValueAccessor {

  itemSelected:Farmeable | undefined

  @Output() emitFarmeable = new EventEmitter<Farmeable>()

  constructor(private farmeableSVC:FarmeablesService) { }

  
  ngOnInit() {

  }

  //propagate changes into the custom form control
  propagateChange = (_: any) => { }

  //From ControlValueAccessor interface
  writeValue(value: any) {
      this.itemSelected = this.farmeableSVC.getFarmeableById(value);
      // console.log("eferf");
  }

  //From ControlValueAccessor interface
  registerOnChange(fn: any) {
      this.propagateChange = fn;
  }

  //From ControlValueAccessor interface
  registerOnTouched(fn: any) {

  }




  getFarmeables(){
    return this.farmeableSVC._farmeable
  }

  selectItem(farmSelected:Farmeable, accordion:IonAccordionGroup){
    this.itemSelected = farmSelected
    // this.emitFarmeable.emit(farmSelected)
    accordion.value='';
    this.propagateChange(this.itemSelected.id);
    //console.log(this.itemSelected)
  }


}
