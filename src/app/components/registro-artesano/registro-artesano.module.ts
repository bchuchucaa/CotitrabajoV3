import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroArtesanoPageRoutingModule } from './registro-artesano-routing.module';

import { RegistroArtesanoPage } from './registro-artesano.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroArtesanoPageRoutingModule
  ],
  declarations: [RegistroArtesanoPage]
})
export class RegistroArtesanoPageModule {}
