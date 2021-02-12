import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LisCotizacionesArtesanoPageRoutingModule } from './lis-cotizaciones-artesano-routing.module';

import { LisCotizacionesArtesanoPage } from './lis-cotizaciones-artesano.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LisCotizacionesArtesanoPageRoutingModule
  ],
  declarations: [LisCotizacionesArtesanoPage]
})
export class LisCotizacionesArtesanoPageModule {}
