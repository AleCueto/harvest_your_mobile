import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TileComponent } from './components/tile/tile.component';
import { FarmComponent } from './components/farm/farm.component';
import { TileDetailComponent } from './components/tile-detail/tile-detail.component';
import { StoreComponent } from './components/store/store.component';
import { FarmeableSelectableComponent } from './components/farmeable-selectable/farmeable-selectable.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { createTranslateLoader } from './utils/translate';
import { FarmListComponent } from './components/farm-list/farm-list.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [TileComponent, FarmComponent, TileDetailComponent, StoreComponent, FarmeableSelectableComponent, FarmListComponent, AboutComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forChild({
    loader: {
    provide: TranslateLoader,
    useFactory: (createTranslateLoader),
    deps: [HttpClient]
    }
    }),
    ReactiveFormsModule,
    
  ],
  exports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    TileComponent,
    FarmComponent,
    TileDetailComponent,
    StoreComponent,
    FarmeableSelectableComponent,
    TranslateModule,
    HttpClientModule,
    FarmListComponent,
    AboutComponent
    ]
})
export class CoreModule { 

}
