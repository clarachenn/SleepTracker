import { Component, OnInit } from '@angular/core';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { AlertController, NavController } from '@ionic/angular';
import { SleepService } from '../services/sleep.service';
import { Share } from '@capacitor/share';
import { LocalNotifications } from '@capacitor/local-notifications';


@Component({
  selector: 'app-logged-sleep-data',
  templateUrl: './logged-sleep-data.page.html',
  styleUrls: ['./logged-sleep-data.page.scss'],
})
export class LoggedSleepDataPage implements OnInit {

  overnightSleepData: OvernightSleepData[] = [];

  constructor(private navController: NavController,
    private alertController: AlertController,  
    private sleepService: SleepService  
  ) {}


  ngOnInit() {
    this.overnightSleepData = [...SleepService.AllOvernightData];
  }

  goBack() {
    this.navController.pop();
  }

  async shareData(data: OvernightSleepData) {
    try {
      await Share.share({
        text: `Summary: ${data.summaryString()}\nDate: ${data.dateString()}`,
      });
    } catch (error) {
      console.error('Error sharing data', error);
    }
  }

  async deleteData(data: OvernightSleepData) {
    const alert = await this.alertController.create({
      header: 'Confirm Deletion',
      message: 'Are you sure you want to delete this sleep log?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            // delete the data
            this.sleepService.deleteOvernightData(data);
            // refresh the displayed data
            this.overnightSleepData = [...SleepService.AllOvernightData];
          }
        }
      ]
    });

    await alert.present();
  }

   
}
