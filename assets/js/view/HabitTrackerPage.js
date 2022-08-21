import * as Component from './Component.js';
import { BUTTON_TEXT } from '../constant.js';
import HabitEnrollForm from './HabitEnrollForm.js';

export default class HabitTrackerPage {
  constructor() {
    this.App = document.querySelector('#App');
    this.formModal = new HabitEnrollForm();
  }

  pageTemplate = habit => {
    const { title, detail, challengePeriod } = habit;
    return (
      Component.Habit(title, BUTTON_TEXT.habitTitlePlaceholder) +
      Component.HabitOptions(detail.options) +
      Component.Calendar(challengePeriod, detail.startDate) +
      Component.CheckButton(BUTTON_TEXT.checkButton) +
      this.formModal.formTemplate()
    );
  };

  render = habit => {
    this.App.insertAdjacentHTML('beforeend', this.pageTemplate(habit));
  };
}
