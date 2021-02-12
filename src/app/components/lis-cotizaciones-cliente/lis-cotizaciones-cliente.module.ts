import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LisCotizacionesClientePageRoutingModule } from './lis-cotizaciones-cliente-routing.module';

import { LisCotizacionesClientePage } from './lis-cotizaciones-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LisCotizacionesClientePageRoutingModule
  ],
  declarations: [LisCotizacionesClientePage]
})
export class LisCotizacionesClientePageModule {}
