import * as Component from './Component.js';
import Store from './Store.js';
import { BUTTON_TEXT } from './constant.js';

export default class OneHabit {
  constructor() {
    this.App = document.querySelector('#App');
    this.store = new Store();
    this.isEditing = false;
    this.habit = this.store.data;
    this.render();
  }

  pageTemplate = () => {
    const { title, detail, challengePeriod } = this.habit;
    return (
      Component.Habit(this.isEditing, title) +
      Component.HabitOptions(detail.options) +
      Component.Calendar(challengePeriod, detail.startDate) +
      Component.CheckButton(BUTTON_TEXT.checkButton)
    );
  };

  render = () => {
    this.App.insertAdjacentHTML('beforeend', this.pageTemplate());
  };
}
