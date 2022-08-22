import * as Component from './Component.js';
import { BUTTON_TEXT } from '../constant/constant.js';
import HabitEnrollForm from './HabitEnrollForm.js';

export default class HabitTrackerPage {
  constructor() {
    this.App = document.querySelector('#App');
    this.formModal = new HabitEnrollForm(this.App);
  }

  pageTemplate = habit => {
    const { title, startDate, options, challengePeriod } = habit;
    return (
      Component.HabitTitle(title, BUTTON_TEXT.habitTitlePlaceholder) +
      Component.HabitOptions(options) +
      Component.Calendar(challengePeriod, startDate) +
      Component.CheckButton(BUTTON_TEXT.checkButton) +
      this.formModal.formTemplate()
    );
  };

  clear = () => {
    this.App.innerHTML = '';
  };

  render = habit => {
    this.App.insertAdjacentHTML('beforeend', this.pageTemplate(habit));
  };

  addEvents = handlerBundle => {
    this.App.addEventListener('click', handlerBundle.enrollButtonClick);
  };
}
