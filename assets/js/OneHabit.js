import Store from './model/Store.js';
import HabitTrackerPage from './view/HabitTrackerPage.js';
import Habit from './domain/Habit.js';
import OneHabitData from './model/OneHabitData.js';
import { ENROLL_FORM_CLASSNAME } from './constant/HabitEnrollFormConstant.js';
import { CLASSNAME } from './constant/constant.js';

const defaultData = new OneHabitData();

export default class OneHabit {
  constructor() {
    this.store = new Store(defaultData);
    this.page = new HabitTrackerPage();
    this.oneHabitData = new OneHabitData(
      this.store.data.habit,
      this.store.data.challenge,
    );
    this.init();
  }

  setStore = () => {
    this.oneHabitData.initForToday();
    this.store.updateData(this.oneHabitData);
    this.store.subscribe(this.update);
  };

  setPage = () => {
    const handlerBundle = {
      enrollButtonClick: this.handleEnrollButtonClick,
      checkButtonClick: this.handleCheckButtonClick,
    };

    if (this.oneHabitData.challenge.isFailed()) {
      this.oneHabitData.resetChallenge();
      this.store.updateData(this.oneHabitData);
    }
    this.page.addEvents(handlerBundle);
  };

  init = () => {
    this.setStore();
    this.setPage();
  };

  update = () => {
    const { habit, challenge } = this.store.data;
    this.oneHabitData.habit = habit;
    this.oneHabitData.challenge = challenge;
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
    this.oneHabitData.challenge.isCheckedToday = true;
    this.store.updateData(this.oneHabitData);
  };

  unCheck = () => {
    this.oneHabitData.challenge.isCheckedToday = false;
    this.store.updateData(this.oneHabitData);
  };

  createHabit = (title, time, location) => {
    return new Habit({
      title: title,
      options: {
        time: time,
        location: location,
      },
    });
  };

  handleEnrollButtonClick = e => {
    e.preventDefault();
    if (e.target.className === ENROLL_FORM_CLASSNAME.ENROLL_BUTTON) {
      const inputs = document.querySelectorAll(
        `.${ENROLL_FORM_CLASSNAME.ENROLL_INPUT}`,
      );
      const inputValues = [...inputs].map(input => input.value);
      const newHabit = this.createHabit(...inputValues);
      this.enroll(new OneHabitData(newHabit));
    }
  };

  handleCheckButtonClick = ({ target }) => {
    if (target.className === CLASSNAME.checkButton) {
      this.oneHabitData.challenge.isCheckedToday
        ? this.unCheck()
        : this.check();
    }
  };
}
