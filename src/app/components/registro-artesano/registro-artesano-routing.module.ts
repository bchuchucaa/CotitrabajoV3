import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroArtesanoPage } from './registro-artesano.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroArtesanoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroArtesanoPageRoutingModule {}
