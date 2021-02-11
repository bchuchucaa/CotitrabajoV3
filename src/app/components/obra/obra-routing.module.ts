import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObraPage } from './obra.page';

const routes: Routes = [
  {
    path: '',
    component: ObraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObraPageRoutingModule {}
