import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoggedSleepinessDataPage } from './logged-sleepiness-data.page';

const routes: Routes = [
  {
    path: '',
    component: LoggedSleepinessDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoggedSleepinessDataPageRoutingModule {}
