import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoTelPage } from './info-tel.page';

const routes: Routes = [
  {
    path: '',
    component: InfoTelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoTelPageRoutingModule {}
