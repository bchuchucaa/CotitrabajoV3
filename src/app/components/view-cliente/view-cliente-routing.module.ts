import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewClientePage } from './view-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: ViewClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewClientePageRoutingModule {}
