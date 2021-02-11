import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearObraPage } from './crear-obra.page';

const routes: Routes = [
  {
    path: '',
    component: CrearObraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearObraPageRoutingModule {}
