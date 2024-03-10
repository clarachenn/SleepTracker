import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoggedSleepDataPage } from './logged-sleep-data.page';

const routes: Routes = [
  {
    path: '',
    component: LoggedSleepDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoggedSleepDataPageRoutingModule {}
