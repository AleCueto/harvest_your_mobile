import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TileComponent } from './components/tile/tile.component';
import { FarmComponent } from './components/farm/farm.component';
import { TilesService } from './services/tiles.service';



@NgModule({
  declarations: [TileComponent, FarmComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    TileComponent,
    FarmComponent,
    ]
})
export class CoreModule { 

}
