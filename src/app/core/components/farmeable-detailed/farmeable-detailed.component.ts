import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Farmeable } from '../../models/farmeable.model';

@Component({
  selector: 'app-farmeable-detailed',
  templateUrl: './farmeable-detailed.component.html',
  styleUrls: ['./farmeable-detailed.component.scss'],
})
export class FarmeableDetailedComponent implements OnInit {

  form:FormGroup;
  mode:"New" | "Edit" = "New";
  @Input('farmeable') set farmeable(farmeable:Farmeable){
    if(farmeable){
      this.form.controls['id'].setValue(farmeable.id);
      this.form.controls['name'].setValue(farmeable.name);
      this.form.controls['amount'].setValue(farmeable.amount);
      this.form.controls['image_beggining'].setValue(farmeable.image_beggining);
      this.form.controls['image_middle'].setValue(farmeable.image_middle);
      this.form.controls['image_end'].setValue(farmeable.image_end);
      this.form.controls['purchase_value'].setValue(farmeable.purchase_value);
      this.form.controls['sale_value'].setValue(farmeable.sale_value);
      this.form.controls['seconds_to_harvest'].setValue(farmeable.seconds_to_harvest);
      this.mode = "Edit";
    }
  }

  constructor(
    private fb:FormBuilder,
    private modal:ModalController
  ) {

    
    this.form = this.fb.group({
      id:[null],
      name:['', [Validators.required]],
      amount:['', [Validators.required]],
      image_beggining:['', [Validators.required]],
      image_middle:['', [Validators.required]],
      image_end:['', [Validators.required]],
      purchase_value:['', [Validators.required]],
      sale_value:['', [Validators.required]],
      seconds_to_harvest:['', [Validators.required]],
    });

  }

  ngOnInit() {}

  onSubmit(){
    
    this.modal.dismiss({person: this.form.value, mode:this.mode}, 'ok');
  }

  onDismiss(result:any){
    this.modal.dismiss(null, 'cancel');
  }
}
