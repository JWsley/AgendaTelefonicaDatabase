import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaTelPageRoutingModule } from './lista-tel-routing.module';

import { ListaTelPage } from './lista-tel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaTelPageRoutingModule
  ],
  declarations: [ListaTelPage]
})
export class ListaTelPageModule {}
