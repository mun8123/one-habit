import Store from './Store.js';
import HabitTrackerPage from './view/HabitTrackerPage.js';
import Habit from './domain/Habit.js';
import { ENROLL_FORM_CLASSNAME } from './constant/HabitEnrollFormConstant.js';
import { CLASSNAME } from './constant/constant.js';
import Challenge from './domain/challenge.js';

export default class OneHabit {
  constructor() {
    this.store = new Store();
    this.page = new HabitTrackerPage();
    this.habit = this.store.data.habit;
    this.challenge = this.store.data.challenge;
    this.init();
  }

  init = () => {
    const handlerBundle = {
      enrollButtonClick: this.handleEnrollButtonClick,
      checkButtonClick: this.handleCheckButtonClick,
    };

    this.page.render({
      habit: this.habit,
      challenge: this.challenge,
    });
    this.page.addEvents(handlerBundle);
    this.store.subscribe(this.update);
  };

  update = () => {
    const { habit, challenge } = this.store.data;
    this.habit = habit;
    this.challenge = challenge;
    this.reRender();
  };

  reRender = () => {
    this.page.clear();
    this.page.render({
      habit: this.habit,
      challenge: this.challenge,
    });
  };

  enroll = newOneHabitData => {
    this.store.updateData(newOneHabitData);
  };

  check = () => {
    this.challenge.isCheckedToday = true;
    this.store.updateData({
      habit: this.habit,
      challenge: this.challenge,
    });
  };

  unCheck = () => {
    this.challenge.isCheckedToday = false;
    this.store.updateData({
      habit: this.habit,
      challenge: this.challenge,
    });
  };

  handleEnrollButtonClick = e => {
    e.preventDefault();
    if (e.target.className === ENROLL_FORM_CLASSNAME.ENROLL_BUTTON) {
      const inputs = document.querySelectorAll(
        `.${ENROLL_FORM_CLASSNAME.ENROLL_INPUT}`,
      );
      const inputValues = [...inputs].map(input => input.value);
      const newOneHabitData = {
        habit: new Habit(...inputValues),
        challenge: new Challenge(),
      };
      this.enroll(newOneHabitData);
    }
  };

  handleCheckButtonClick = ({ target }) => {
    if (target.className === CLASSNAME.checkButton) {
      this.challenge.isCheckedToday ? this.unCheck() : this.check();
    }
  };
}
