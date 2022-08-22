import { todayInfo } from './utils/date.js';

export default class Habit {
  constructor(title, time, location) {
    this.title = title;
    this.startDate = `${todayInfo.year}/${todayInfo.month}/${todayInfo.date}`;
    this.options = {
      time: time,
      location: location,
    };
    this.challengePeriod = 3;
  }
}
