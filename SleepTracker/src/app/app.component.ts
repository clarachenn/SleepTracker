import { Component } from '@angular/core';
import { LocalNotifications } from '@capacitor/local-notifications';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  ngOnInit(): void {
    this.scheduleReminder();
  }

  // schedule daily 11am notifications to log sleep
  async scheduleReminder() {
    await LocalNotifications.schedule({
      notifications: [
        {
          title: "SleepTracker Reminder",
          body: "Don't forget to log your sleep!", 
          id: 1,
          schedule: { on: { hour: 14, minute: 36}, allowWhileIdle: true, every: 'day' }
        }
      ]
    })
  }
}
