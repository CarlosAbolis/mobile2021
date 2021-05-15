import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViloesPageRoutingModule } from './viloes-routing.module';

import { ViloesPage } from './viloes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViloesPageRoutingModule
  ],
  declarations: [ViloesPage]
})
export class ViloesPageModule {}
