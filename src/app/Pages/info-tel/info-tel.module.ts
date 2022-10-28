import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoTelPageRoutingModule } from './info-tel-routing.module';

import { InfoTelPage } from './info-tel.page';
import { SimpleMaskDirective, SimpleMaskModule, SimpleMaskPipe } from 'ngx-ion-simple-mask'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoTelPageRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SimpleMaskModule
  ],
  declarations: [InfoTelPage]
})
export class InfoTelPageModule {}
