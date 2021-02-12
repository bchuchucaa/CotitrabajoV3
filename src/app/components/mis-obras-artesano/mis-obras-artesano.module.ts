import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisObrasArtesanoPageRoutingModule } from './mis-obras-artesano-routing.module';

import { MisObrasArtesanoPage } from './mis-obras-artesano.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisObrasArtesanoPageRoutingModule
  ],
  declarations: [MisObrasArtesanoPage]
})
export class MisObrasArtesanoPageModule {}
