import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { SleepService } from '../services/sleep.service';

@Component({
  selector: 'app-logged-sleepiness-data',
  templateUrl: './logged-sleepiness-data.page.html',
  styleUrls: ['./logged-sleepiness-data.page.scss'],
})
export class LoggedSleepinessDataPage implements OnInit {

  sleepinessData: StanfordSleepinessData[] = [];

  constructor(private navController: NavController) {}

  ngOnInit() {
    this.sleepinessData = [...SleepService.AllSleepinessData];
  }

  goBack() {
    this.navController.pop();
  }

}
