import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';

import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    FolderPageRoutingModule,
    CoreModule
  ],
  declarations: [FolderPage]
})
export class FolderPageModule {}
