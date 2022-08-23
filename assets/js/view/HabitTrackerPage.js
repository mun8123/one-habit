import * as Component from './Component.js';
import { BUTTON_TEXT, CLASSNAME } from '../constant/constant.js';

export default class HabitTrackerPage {
  constructor() {
    this.App = document.querySelector('#App');
  }

  pageTemplate = ({ habit, challenge }) => {
    const { title, options } = habit;
    const { startDate, challengePeriod, isCheckedToday } = challenge;
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

  render = pageData => {
    this.App.insertAdjacentHTML('beforeend', this.pageTemplate(pageData));
  };

  addEvents = handlerBundle => {
    this.App.addEventListener('click', e => {
      handlerBundle.enrollButtonClick(e);
      handlerBundle.checkButtonClick(e);
    });
  };
}
