import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewArtesanoPage } from './view-artesano.page';

const routes: Routes = [
  {
    path: '',
    component: ViewArtesanoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewArtesanoPageRoutingModule {}
