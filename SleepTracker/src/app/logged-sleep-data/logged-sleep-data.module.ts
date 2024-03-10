import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoggedSleepDataPageRoutingModule } from './logged-sleep-data-routing.module';

import { LoggedSleepDataPage } from './logged-sleep-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoggedSleepDataPageRoutingModule
  ],
  declarations: [LoggedSleepDataPage]
})
export class LoggedSleepDataPageModule {}
