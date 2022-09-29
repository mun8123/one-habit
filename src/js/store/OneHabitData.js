import Challenge from '../domain/Challenge.js';
import Habit from '../domain/Habit.js';
import { todayInfo } from '../utils/date.js';

export default class OneHabitData {
  constructor(habit = {}, challenge = {}) {
    this.habit = new Habit(habit);
    this.challenge = new Challenge(challenge);
  }

  initForToday = () => {
    this.challenge.initForToday();
  };

  resetChallenge = () => {
    this.habit.createdAt = `${todayInfo.year}/${todayInfo.month}/${todayInfo.date}`;
    this.challenge.resetChallenge();
  };

  goToNextChallenge = () => {
    this.challenge.goToNextChallenge();
  };
}
