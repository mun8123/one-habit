import * as Component from './Component.js';

export default class OneHabit {
  constructor() {
    this.App = document.querySelector('#App');
    this.isEditing = false;
    this.habit = '출근도장';

    this.render();
  }

  pageTemplate = () => {
    return Component.Habit(this.isEditing, this.habit);
  };

  render = () => {
    this.App.insertAdjacentHTML('beforeend', this.pageTemplate());
  };
}
