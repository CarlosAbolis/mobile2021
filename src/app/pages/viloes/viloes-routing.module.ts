import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViloesPage } from './viloes.page';

const routes: Routes = [
  {
    path: '',
    component: ViloesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViloesPageRoutingModule {}
