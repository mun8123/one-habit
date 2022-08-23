import Challenge from '../domain/challenge.js';
import Habit from '../domain/Habit.js';

export default class OneHabitData {
  constructor(habit, challenge) {
    this.habit = habit || new Habit();
    this.challenge = challenge || new Challenge();
  }
}
