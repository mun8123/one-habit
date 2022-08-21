import * as Component from './Component.js';
import { todayInfo } from './date.js';

export default class OneHabit {
  constructor() {
    this.App = document.querySelector('#App');
    this.isEditing = false;
    this.habit = '출근도장';
    this.habitDetail = {
      time: '8:00',
    };
    this.challengePeriod = 3;

    this.render();
  }

  pageTemplate = () => {
    return (
      Component.Habit(this.isEditing, this.habit) +
      Component.HabitDetail(this.habitDetail) +
      Component.Calendar(this.challengePeriod, todayInfo.month, todayInfo.date) +
      Component.CheckButton('성공')
    );
  };

  render = () => {
    this.App.insertAdjacentHTML('beforeend', this.pageTemplate());
  };
}
