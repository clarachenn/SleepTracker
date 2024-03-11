import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { SleepService } from '../services/sleep.service';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-logged-sleepiness-data',
  templateUrl: './logged-sleepiness-data.page.html',
  styleUrls: ['./logged-sleepiness-data.page.scss'],
})
export class LoggedSleepinessDataPage implements OnInit {

  sleepinessData: StanfordSleepinessData[] = [];

  constructor(private navController: NavController,
    private alertController: AlertController,  
    private sleepService: SleepService  
  ) {}
  
  ngOnInit() {
    this.sleepinessData = [...SleepService.AllSleepinessData];
  }

  goBack() {
    this.navController.pop();
  }

  async shareSleepinessData(data: StanfordSleepinessData) {
    try {
      await Share.share({
        text: `Sleepiness: ${data.summaryString()}\nDate: ${data.dateString()}`,
      });
    } catch (error) {
      console.error('Error sharing data', error);
    }
  }

  async deleteSleepinessData(data: StanfordSleepinessData) {
    const alert = await this.alertController.create({
      header: 'Confirm Deletion',
      message: 'Are you sure you want to delete this sleepiness log?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            // delete the data
            this.sleepService.deleteSleepinessData(data);
            // refresh the displayed data
            this.sleepinessData = [...SleepService.AllSleepinessData];
          }
        }
      ]
    });

    await alert.present();
  }
}