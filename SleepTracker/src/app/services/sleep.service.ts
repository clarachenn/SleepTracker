import { Injectable } from '@angular/core';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SleepService {
	private static LoadDefaultData:boolean = true;
	public static AllSleepData:SleepData[] = [];
	public static AllOvernightData:OvernightSleepData[] = [];
	public static AllSleepinessData:StanfordSleepinessData[] = [];
	public sleepDataChanged = new Subject<void>();  


	constructor() {
		if(SleepService.LoadDefaultData) {
			this.addDefaultData();
		SleepService.LoadDefaultData = false;
	}
	}

	private addDefaultData() {
		this.logOvernightData(new OvernightSleepData(new Date('March 8, 2021 01:03:00'), new Date('March 9, 2021 09:25:00')));
		this.logSleepinessData(new StanfordSleepinessData(4, new Date('March 9, 2021 14:38:00')));
		this.logOvernightData(new OvernightSleepData(new Date('March 9, 2021 23:11:00'), new Date('March 10, 2021 08:03:00')));
	}

	public logOvernightData(sleepData:OvernightSleepData) {
		SleepService.AllSleepData.push(sleepData);
		SleepService.AllOvernightData.push(sleepData);
		this.sleepDataChanged.next();
	}

	public logSleepinessData(sleepData:StanfordSleepinessData) {
		SleepService.AllSleepData.push(sleepData);
		SleepService.AllSleepinessData.push(sleepData);
		this.sleepDataChanged.next();
	}

	public deleteOvernightData(sleepData: OvernightSleepData) {
		const index = SleepService.AllOvernightData.indexOf(sleepData);
		if (index !== -1) {
		  SleepService.AllSleepData.splice(index, 1);
		  SleepService.AllOvernightData.splice(index, 1);
		  this.sleepDataChanged.next();
		}
	}

	public deleteSleepinessData(sleepData: StanfordSleepinessData) {
		const index = SleepService.AllSleepinessData.indexOf(sleepData);
		if (index !== -1) {
			SleepService.AllSleepinessData.splice(index, 1);
			SleepService.AllOvernightData.splice(index, 1);
			this.sleepDataChanged.next();
		}
	}

	public calculateAverageSleepDuration(): string {
		let totalDuration = 0;
		let numberOfLogs = 0;

		SleepService.AllOvernightData.forEach((sleepData: OvernightSleepData) => {
			totalDuration += sleepData.getSleepDuration();
			numberOfLogs++;
		});

		const averageDurationMs = numberOfLogs > 0 ? totalDuration / numberOfLogs : 0;
		const hours = Math.floor(averageDurationMs / (1000 * 60 * 60));
		const minutes = Math.floor((averageDurationMs % (1000 * 60 * 60)) / (1000 * 60));

		return `${hours} hours ${minutes} minutes`;
	}

	getAllOvernightData() {
		return SleepService.AllOvernightData;
	}

	get7OvernightData(): OvernightSleepData[] {
		const currentDate = new Date();
		const sevenDaysAgo = new Date();
		sevenDaysAgo.setDate(currentDate.getDate() - 7);
		return SleepService.AllOvernightData.filter(data => data.getSleepStart() <= sevenDaysAgo);
	}
}
