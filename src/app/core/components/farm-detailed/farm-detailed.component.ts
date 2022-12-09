import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonModal, ModalController, NavParams } from '@ionic/angular';
import { FarmService } from '../../services/farm.service';

@Component({
  selector: 'app-farm-detailed',
  templateUrl: './farm-detailed.component.html',
  styleUrls: ['./farm-detailed.component.scss'],
})
export class FarmDetailedComponent implements OnInit {
  

  
  form_edit:FormGroup | undefined;

  id:number = 0

  

  
  constructor(private fb:FormBuilder, navParams:NavParams, private farmSVC:FarmService, private modal:ModalController) {
    
    this.id = navParams.get('id');

    this.form_edit = this.fb.group({
      id:this.id,
      farmName:['', [Validators.required]],
  });

  }



  onSubmit(){
    // console.log("efwfer")
    // console.log(this.id)
    // this.farmSVC.editFarm(this.id, this.form_edit?.value)
    this.modal.dismiss(this.form_edit?.value)
  }

  ngOnInit() {}

}
