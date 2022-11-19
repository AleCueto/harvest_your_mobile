import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Farmeable } from '../../models/farmeable.model';
import { FarmeablesService } from '../../services/farmeables.service';


@Component({
  selector: 'app-tile-detail',
  templateUrl: './tile-detail.component.html',
  styleUrls: ['./tile-detail.component.scss'],
})
export class TileDetailComponent implements OnInit {

  farmeables:Farmeable[] | undefined

  constructor(private farmeableSVC:FarmeablesService,
    private modal:ModalController, 
    private alertController: AlertController) { }

  

  ngOnInit() {

    this.farmeables = this.farmeableSVC._farmeable

  }

  //Lanza el modal con todos los objetos disponibles (tile-detail.component)
  printFarmeable(farm:Farmeable){
    // console.log(farm)
    if(farm.amount > 0 ){
      this.modal.dismiss(farm);
      farm.amount--;
    }else{
      this.presentAlert(farm);
    }
    
  }

  async presentAlert(farm:Farmeable) {
    const alert = await this.alertController.create({
      header: '¡No puedes!',
      subHeader: 'No te quedan más ' + farm.name + "/s",
      message: 'Deberías ir a la tienda y comprar más.',
      buttons: ['OK'],
    });

    await alert.present();
  }


  clickFarmeable(){
    
  }

  

}
