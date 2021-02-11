import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewClientePageRoutingModule } from './view-cliente-routing.module';

import { ViewClientePage } from './view-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewClientePageRoutingModule
  ],
  declarations: [ViewClientePage]
})
export class ViewClientePageModule {}
