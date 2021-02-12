import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactArtesanoPage } from './contact-artesano.page';

const routes: Routes = [
  {
    path: '',
    component: ContactArtesanoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactArtesanoPageRoutingModule {}
