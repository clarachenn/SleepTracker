import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoggedSleepinessDataPageRoutingModule } from './logged-sleepiness-data-routing.module';

import { LoggedSleepinessDataPage } from './logged-sleepiness-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoggedSleepinessDataPageRoutingModule
  ],
  declarations: [LoggedSleepinessDataPage]
})
export class LoggedSleepinessDataPageModule {}
