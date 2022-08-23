import { todayInfo } from '../utils/date.js';

const CHALLENGE_CICLE = [3, 7, 21, 30, 31];

export default class Challenge {
  constructor({
    startDate,
    challengePeriod = 3,
    today = todayInfo.date,
    isCheckedToday = false,
  }) {
    this.startDate =
      startDate || `${todayInfo.year}/${todayInfo.month}/${todayInfo.date}`;
    this.challengePeriod = challengePeriod;
    this.today = today;
    this.isCheckedToday = isCheckedToday;
  }

  isFailed = () => {
    return this.isCheckedToday === false;
  };

  resetChallenge = () => {
    this.startDate = `${todayInfo.year}/${todayInfo.month}/${todayInfo.date}`;
    this.challengePeriod = CHALLENGE_CICLE[0];
  };

  initForToday = () => {
    this.today = todayInfo.date;
    if (this.today !== todayInfo.date) this.isCheckedToday = false;
  };
}
