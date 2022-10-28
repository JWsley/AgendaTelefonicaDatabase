import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaTelPage } from './lista-tel.page';

const routes: Routes = [
  {
    path: '',
    component: ListaTelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaTelPageRoutingModule {}
