import { NgModule } from '@angular/core';

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
