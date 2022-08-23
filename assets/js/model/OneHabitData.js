import Challenge from '../domain/Challenge.js';
import Habit from '../domain/Habit.js';

export default class OneHabitData {
  constructor(habit = {}, challenge = {}) {
    this.habit = new Habit(habit);
    this.challenge = new Challenge(challenge);
  }

  initForToday = () => {
    this.challenge.initIsCheckedToday();
  };
}
