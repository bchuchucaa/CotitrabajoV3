import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewArtesanoPageRoutingModule } from './view-artesano-routing.module';

import { ViewArtesanoPage } from './view-artesano.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewArtesanoPageRoutingModule
  ],
  declarations: [ViewArtesanoPage]
})
export class ViewArtesanoPageModule {}
