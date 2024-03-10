import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular';
import { SleepService } from '../services/sleep.service';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { FormsModule } from '@angular/forms';  
import { IonicModule, AlertController } from '@ionic/angular';   
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [FormsModule, IonicModule],
})
export class Tab3Page {
  sleepinessLevel: number | undefined;
  timestamp: Date | undefined;
 
  constructor(private sleepService: SleepService, private alertController: AlertController, private navCtrl: NavController) {}


  logSleepinessData() {
    // check that data exists
    if (!this.sleepinessLevel || !this.timestamp) {
      this.presentErrorAlert('Please select timestamp and sleepiness level.');
      return;
    }

    // create an instance of S with the collected data
    const sleepinessData = new StanfordSleepinessData(this.sleepinessLevel, this.timestamp);
    
    // add entry to sleep service
    this.sleepService.logSleepinessData(sleepinessData);

    // show success message
    this.presentSuccessAlert('Sleepiness data logged successfully.');
  }

  async presentErrorAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentSuccessAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Success',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  viewLoggedSleepinessData() {
    this.navCtrl.navigateForward('/logged-sleepiness-data'); 
  }
}
