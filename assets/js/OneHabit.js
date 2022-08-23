import Store from './model/Store.js';
import HabitTrackerPage from './view/HabitTrackerPage.js';
import Habit from './domain/Habit.js';
import OneHabitData from './model/OneHabitData.js';
import { ENROLL_FORM_CLASSNAME } from './constant/HabitEnrollFormConstant.js';
import { CLASSNAME } from './constant/constant.js';

const defaultData = new OneHabitData();
defaultData.isDefault = true;

export default class OneHabit {
  constructor() {
    this.store = new Store(defaultData);
    this.page = new HabitTrackerPage();
    this.oneHabitData = new OneHabitData(
      this.store.data.habit,
      this.store.data.challenge,
    );

    this.handlerBundle = {
      enrollButtonClick: this.handleEnrollButtonClick,
      checkButtonClick: this.handleCheckButtonClick,
      enrollFormOpenButtonClick: this.handleEnrollFormOpenButtonClick,
      dimLayerClick: this.handleDimLayerClick,
    };

    this.init();
  }

  setGreetingPage = () => {
    this.page.render(this.page.greetingPageTemplate);
    this.page.addEvents(this.handlerBundle);
  };

  setHabitTrackerPage = () => {
    if (this.oneHabitData.challenge.isFailed()) {
      this.oneHabitData.resetChallenge();
    } else if (this.oneHabitData.challenge.isSuccess()) {
      this.oneHabitData.goToNextChallenge();
    }
    this.page.addEvents(this.handlerBundle);
  };

  init = () => {
    if (this.store.data.isDefault) {
      this.setGreetingPage();
      return;
    }
    this.setHabitTrackerPage();

    this.oneHabitData.initForToday();
    this.store.subscribe(this.update);
    this.store.updateData(this.oneHabitData);
  };

  update = () => {
    const { habit, challenge } = this.store.data;
    this.oneHabitData.habit = habit;
    this.oneHabitData.challenge = challenge;
    this.reRender();
  };

  reRender = () => {
    this.page.clear();
    this.page.render(this.page.trackerPageTemplate, this.oneHabitData);
  };

  enroll = newOneHabitData => {
    if (this.oneHabitData.isDefault) {
      delete this.oneHabitData.isDefault;
    }
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

  handleEnrollFormOpenButtonClick = ({ target }) => {
    if (target.classList.contains(CLASSNAME.enrollFormOpenButton)) {
      document.querySelector('.dim').style.height = '100vh';
    }
  };

  handleDimLayerClick = ({ target }) => {
    if (target.className === 'dim') {
      target.style.height = '0';
    }
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
      document.querySelector('.dim').style.height = '0';
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
