import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogInArtesanoPageRoutingModule } from './log-in-artesano-routing.module';

import { LogInArtesanoPage } from './log-in-artesano.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogInArtesanoPageRoutingModule
  ],
  declarations: [LogInArtesanoPage]
})
export class LogInArtesanoPageModule {}
