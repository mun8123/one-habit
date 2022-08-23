import { todayInfo } from '../utils/date.js';

const CHALLENGE_CICLE = [3, 7, 21, 30, 31];

export default class Challenge {
  constructor(startDate, challengePeriod = 3) {
    this.startDate =
      startDate || `${todayInfo.year}/${todayInfo.month}/${todayInfo.date}`;
    this.challengePeriod = challengePeriod;
    this.isCheckedToday = false;
  }
}
