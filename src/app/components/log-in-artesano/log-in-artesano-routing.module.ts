import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogInArtesanoPage } from './log-in-artesano.page';

const routes: Routes = [
  {
    path: '',
    component: LogInArtesanoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogInArtesanoPageRoutingModule {}
