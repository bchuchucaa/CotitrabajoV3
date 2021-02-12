import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LisCotizacionesArtesanoPage } from './lis-cotizaciones-artesano.page';

const routes: Routes = [
  {
    path: '',
    component: LisCotizacionesArtesanoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LisCotizacionesArtesanoPageRoutingModule {}
