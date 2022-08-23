import Store from './model/Store.js';
import HabitTrackerPage from './view/HabitTrackerPage.js';
import Habit from './domain/Habit.js';
import OneHabitData from './model/OneHabitData.js';
import { ENROLL_FORM_CLASSNAME } from './constant/HabitEnrollFormConstant.js';
import { CLASSNAME } from './constant/constant.js';

export default class OneHabit {
  constructor() {
    this.store = new Store(new OneHabitData());
    this.page = new HabitTrackerPage();
    this.habit = this.store.data.habit;
    this.challenge = this.store.data.challenge;
    this.init();
  }

  init = () => {
    this.oneHabitData = new OneHabitData(this.habit, this.challenge);
    const handlerBundle = {
      enrollButtonClick: this.handleEnrollButtonClick,
      checkButtonClick: this.handleCheckButtonClick,
    };

    this.page.render(this.oneHabitData);
    this.page.addEvents(handlerBundle);
    this.store.subscribe(this.update);
  };

  update = () => {
    const { habit, challenge } = this.store.data;
    this.habit = this.oneHabitData.habit = habit;
    this.challenge = this.oneHabitData.challenge = challenge;
    this.reRender();
  };

  reRender = () => {
    this.page.clear();
    this.page.render(this.oneHabitData);
  };

  enroll = newOneHabitData => {
    this.store.updateData(newOneHabitData);
  };

  check = () => {
    this.challenge.isCheckedToday = true;
    this.store.updateData(this.oneHabitData);
  };

  unCheck = () => {
    this.challenge.isCheckedToday = false;
    this.store.updateData(this.oneHabitData);
  };

  handleEnrollButtonClick = e => {
    e.preventDefault();
    if (e.target.className === ENROLL_FORM_CLASSNAME.ENROLL_BUTTON) {
      const inputs = document.querySelectorAll(
        `.${ENROLL_FORM_CLASSNAME.ENROLL_INPUT}`,
      );
      const inputValues = [...inputs].map(input => input.value);
      const newHabit = new Habit(...inputValues);
      this.enroll(new OneHabitData(newHabit));
    }
  };

  handleCheckButtonClick = ({ target }) => {
    if (target.className === CLASSNAME.checkButton) {
      this.challenge.isCheckedToday ? this.unCheck() : this.check();
    }
  };
}
