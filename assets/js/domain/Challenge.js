import { getLastDateOfMonth, todayInfo } from '../utils/date.js';
import { splitDateBySlash } from './calendar.js';

const CHALLENGE_CICLE = [3, 7, 21, 35];

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

  initForToday = () => {
    if (this.today !== todayInfo.date) this.isCheckedToday = false;
    this.today = todayInfo.date;
  };

  isFailed = () => {
    return this.today !== todayInfo.date && this.isCheckedToday === false;
  };

  resetChallenge = () => {
    this.startDate = `${todayInfo.year}/${todayInfo.month}/${todayInfo.date}`;
    this.challengePeriod = CHALLENGE_CICLE[0];
  };

  isSuccess = () => {
    const startDate = splitDateBySlash(this.startDate).at(-1);
    const lastDateOfMonth = getLastDateOfMonth(
      todayInfo.year,
      todayInfo.month - 1,
    );

    let period = todayInfo.date - this.challengePeriod;
    if (period < 0) {
      period += lastDateOfMonth;
    }
    return period === startDate;
  };

  goToNextChallenge = () => {
    if (this.challengePeriod === CHALLENGE_CICLE.at(-1)) {
      this.challengePeriod = CHALLENGE_CICLE[0];
    } else {
      const cicleIndex = CHALLENGE_CICLE.indexOf(this.challengePeriod);
      this.challengePeriod = CHALLENGE_CICLE[cicleIndex + 1];
    }
  };
}
