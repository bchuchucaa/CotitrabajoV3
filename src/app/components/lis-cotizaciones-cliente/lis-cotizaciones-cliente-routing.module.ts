import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LisCotizacionesClientePage } from './lis-cotizaciones-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: LisCotizacionesClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LisCotizacionesClientePageRoutingModule {}
