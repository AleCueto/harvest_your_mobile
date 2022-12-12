import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Farmeable } from '../../models/farmeable.model';
import { FarmeablesService } from '../../services/farmeables.service';
import { TilesService } from '../../services/tiles.service';
import { FarmeableDetailedComponent } from '../farmeable-detailed/farmeable-detailed.component';
import { FarmeableEditableComponent } from '../farmeable-editable/farmeable-editable.component';

@Component({
  selector: 'app-farmeable-creator',
  templateUrl: './farmeable-creator.component.html',
  styleUrls: ['./farmeable-creator.component.scss'],
})
export class FarmeableCreatorComponent implements OnInit {


  constructor(
    private farmeableSVC:FarmeablesService,
    private modal:ModalController,
    private alert:AlertController,
    private tilesSVC:TilesService
  ) { }

  ngOnInit() { }

  getFarmeable() {
    return this.farmeableSVC.farmeables$;
  }

  async presentFarmeableForm(farmeable: Farmeable | null) {
    const modal = await this.modal.create({
      component: FarmeableDetailedComponent,
      componentProps: {
        farmeable: farmeable
      },
    });
    modal.present();
    modal.onDidDismiss().then(result => {
      if (result && result.data) {
        switch (result.data.mode) {
          case 'New':
            this.farmeableSVC.createFarmeable(result.data.person);
            break;
          case 'Edit':
            this.farmeableSVC.updateFarmeable(result.data.person);
            break;
          default:
        }
      }
    });
  }

  onEditFarmeable(farmeable:Farmeable) {
    this.presentFarmeableForm(farmeable);
  }

  onNewFarmeable(){
    this.presentFarmeableForm(null);  
  }

  async onDeleteAlert(farmeable:Farmeable) {
    const alert = await this.alert.create({
      header: 'Atención',
      message: '¿Está seguro de que desear borrar este farmeable?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log("Operacion cancelada");
          },
        },
        {
          text: 'Borrar',
          role: 'confirm',
          handler: () => {
            this.farmeableSVC.deleteFarmeableById(farmeable.id);
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  async onFarmeableUsageAlert(e:any) {
    const alert = await this.alert.create({
      header: 'Error',
      message: 'No es posible borrar el farmeable porque está asignado a una casilla',
      buttons: [
        {
          text: 'Cerrar',
          role: 'close',
          handler: () => {

          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  onDeleteFarmeable(farmeable:Farmeable) {
    if (!this.tilesSVC.getTileByFarmeable(farmeable).length)
      this.onDeleteAlert(farmeable);
    else
      this.onFarmeableUsageAlert(farmeable);


  }



}
