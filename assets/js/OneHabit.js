import Store from './Store.js';
import HabitTrackerPage from './view/HabitTrackerPage.js';
import Habit from './domain/Habit.js';
import { ENROLL_FORM_CLASSNAME } from './constant/HabitEnrollFormConstant.js';
import { CLASSNAME } from './constant/constant.js';

export default class OneHabit {
  constructor() {
    this.store = new Store();
    this.page = new HabitTrackerPage();
    this.habit = this.store.data;
    this.init();
  }

  init = () => {
    const handlerBundle = {
      enrollButtonClick: this.handleEnrollButtonClick,
      checkButtonClick: this.handleCheckButtonClick,
    };

    this.page.render(this.habit);
    this.page.addEvents(handlerBundle);
    this.store.subscribe(this.update);
  };

  update = () => {
    this.habit = this.store.data;
    this.reRender();
  };

  reRender = () => {
    this.page.clear();
    this.page.render(this.habit);
  };

  enroll = newHabit => {
    this.store.updateData(newHabit);
  };

  check = () => {
    this.habit.isCheckedToday = true;
    this.store.updateData(this.habit);
  };

  unCheck = () => {
    this.habit.isCheckedToday = false;
    this.store.updateData(this.habit);
  };

  handleEnrollButtonClick = e => {
    e.preventDefault();
    console.log(e.target, ENROLL_FORM_CLASSNAME.ENROLL_BUTTON);
    if (e.target.className === ENROLL_FORM_CLASSNAME.ENROLL_BUTTON) {
      const inputs = document.querySelectorAll(
        `.${ENROLL_FORM_CLASSNAME.ENROLL_INPUT}`,
      );
      const inputValues = [...inputs].map(input => input.value);
      const newHabit = new Habit(...inputValues);
      this.enroll(newHabit);
    }
  };

  handleCheckButtonClick = ({ target }) => {
    if (target.className === CLASSNAME.checkButton) {
      this.habit.isCheckedToday ? this.unCheck() : this.check();
    }
  };
}
