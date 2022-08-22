import * as Component from './Component.js';
import { BUTTON_TEXT, CLASSNAME } from '../constant/constant.js';

export default class HabitTrackerPage {
  constructor() {
    this.App = document.querySelector('#App');
  }

  pageTemplate = habit => {
    const { title, startDate, options, challengePeriod, isCheckedToday } =
      habit;
    return (
      Component.HabitTitle(title, BUTTON_TEXT.habitTitlePlaceholder) +
      Component.HabitOptions(options) +
      Component.Calendar(challengePeriod, startDate, isCheckedToday) +
      Component.CheckButton(BUTTON_TEXT.checkButton, CLASSNAME.checkButton) +
      Component.HabitEnrollForm()
    );
  };

  clear = () => {
    this.App.innerHTML = '';
  };

  render = habit => {
    this.App.insertAdjacentHTML('beforeend', this.pageTemplate(habit));
  };

  addEvents = handlerBundle => {
    this.App.addEventListener('click', e => {
      handlerBundle.enrollButtonClick(e);
      handlerBundle.checkButtonClick(e);
    });
  };
}
