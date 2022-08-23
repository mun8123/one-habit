import * as Component from './Component.js';
import {
  DEFAULT_TITLE_TEXT,
  BUTTON_TEXT,
  CLASSNAME,
} from '../constant/constant.js';

export default class HabitTrackerPage {
  constructor() {
    this.App = document.querySelector('#App');
  }

  greetingPageTemplate = () => {
    return (
      Component.HabitTitle(DEFAULT_TITLE_TEXT) +
      Component.EnrollFormOpenButton(
        BUTTON_TEXT.enrollFormOpenButton,
        CLASSNAME.enrollFormOpenButton,
      ) +
      Component.HabitEnrollForm()
    );
  };

  trackerPageTemplate = ({ habit, challenge }) => {
    const { title, options } = habit;
    const { startDate, challengePeriod, isCheckedToday } = challenge;
    return (
      Component.HabitTitle(title) +
      Component.HabitOptions(options) +
      Component.Calendar(challengePeriod, startDate, isCheckedToday) +
      Component.CheckButton(BUTTON_TEXT.checkButton, CLASSNAME.checkButton) +
      Component.HabitEnrollForm() +
      Component.EnrollFormOpenButton(
        BUTTON_TEXT.enrollFormOpenButton,
        `${CLASSNAME.enrollFormOpenButton} ${CLASSNAME.floatingButton}`,
      )
    );
  };

  clear = () => {
    this.App.innerHTML = '';
  };

  render = (pageTemplate, pageData) => {
    this.App.insertAdjacentHTML('beforeend', pageTemplate(pageData));
  };

  addEvents = handlerBundle => {
    this.App.addEventListener('click', e => {
      handlerBundle.enrollButtonClick(e);
      handlerBundle.checkButtonClick(e);
      handlerBundle.enrollFormOpenButtonClick(e);
      handlerBundle.dimLayerClick(e);
    });
  };
}
