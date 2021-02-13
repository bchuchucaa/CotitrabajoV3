import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisObrasArtesanoPage } from './mis-obras-artesano.page';

const routes: Routes = [
  {
    path: '',
    component: MisObrasArtesanoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisObrasArtesanoPageRoutingModule {}
