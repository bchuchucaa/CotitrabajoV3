import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactArtesanoPageRoutingModule } from './contact-artesano-routing.module';

import { ContactArtesanoPage } from './contact-artesano.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactArtesanoPageRoutingModule
  ],
  declarations: [ContactArtesanoPage]
})
export class ContactArtesanoPageModule {}
