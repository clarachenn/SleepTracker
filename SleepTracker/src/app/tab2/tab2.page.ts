import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { SleepService } from '../services/sleep.service';
import { AlertController } from '@ionic/angular'; 
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';  
import { LocalNotifications } from '@capacitor/local-notifications';
import { every } from 'rxjs';

 
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule]
})

export class Tab2Page {
  bedtime: string | undefined;
  wakeupTime: string | undefined;
  pickerOptions = {
    cssClass: 'ion-picker-smaller'
  };


  constructor(private sleepService: SleepService, private alertController: AlertController, private navCtrl: NavController) {
  }


  logSleepData() {
    if (!this.bedtime || !this.wakeupTime) {
      console.error('Bedtime or wakeup time is undefined');
      this.presentErrorLogAlert();
      return;
    }
  
    const bedtimeDate = new Date(this.bedtime);
    const wakeupTimeDate = new Date(this.wakeupTime);
  
    // check if the conversion to Date was successful
    if (isNaN(bedtimeDate.getTime()) || isNaN(wakeupTimeDate.getTime())) {
      console.error('Invalid bedtime or wakeup time');
      return;
    }
  
    // create an instance of OvernightSleepData with the collected data
    const sleepData = new OvernightSleepData(bedtimeDate, wakeupTimeDate);
  
    // log the sleep data using SleepService
    new Promise<void>((resolve, reject) => {
      this.sleepService.logOvernightData(sleepData);
      resolve();
    }).then(() => {
      // print message
      console.log('logged sleep data');
  
      // Show success alert
      this.presentSuccessLogAlert();
    }).catch((error: any) => {
      console.error('Error logging sleep data:', error);
    });
  }

  // show error alert if user attempts to log sleep when inputs are empty
  async presentErrorLogAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Please fill all inputs.',
      buttons: ['OK']
    });

    await alert.present();
  }

  // show success alert if data logged successfully
  async presentSuccessLogAlert() {
    const alert = await this.alertController.create({
    header: 'Success',
    message: 'Sleep data logged successfully.',
    buttons: ['OK']
  });

  await alert.present();
  }

  // display all sleep history
  viewLoggedData() {
    this.navCtrl.navigateForward('/logged-data'); 
  }

}
