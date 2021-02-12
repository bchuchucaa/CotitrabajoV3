import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearObraPageRoutingModule } from './crear-obra-routing.module';

import { CrearObraPage } from './crear-obra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearObraPageRoutingModule
  ],
  declarations: [CrearObraPage]
})
export class CrearObraPageModule {}
