import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { SleepService } from '../services/sleep.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  weekSleepHistory: OvernightSleepData[] = [];
  averageSleep7Days: string | undefined;
  
  constructor(private navCtrl: NavController, private sleepService: SleepService) {}

  ngOnInit() {
    // fetch sleep history data when the component initializes
    this.loadWeekSleepHistory();
    this.loadAverageSleep();

    // subscribe to changes in sleep data
    this.sleepService.sleepDataChanged.subscribe(() => {
      this.loadWeekSleepHistory();
      this.loadAverageSleep();
    });
  }

  loadAverageSleep() {
    this.averageSleep7Days = this.sleepService.calculateAverageSleepDuration();
    
  }

  loadWeekSleepHistory() {
    this.weekSleepHistory = this.sleepService.get7OvernightData();
  }


  // display all sleep history
  viewLoggedData() {
    this.navCtrl.navigateForward('/logged-data'); 
  }

}
