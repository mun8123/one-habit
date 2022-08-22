import { CLASSNAME } from './constant/HabitEnrollFormConstant.js';
import Store from './Store.js';
import HabitTrackerPage from './view/HabitTrackerPage.js';
import Habit from './Habit.js';

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
    };

    this.page.render(this.habit);
    this.page.addEvents(handlerBundle);
  };

  enroll = newHabit => {
    this.store.setData(newHabit);
    this.habit = this.store.getData();
    this.page.clear();
    this.page.render(this.habit);
  };

  handleEnrollButtonClick = e => {
    e.preventDefault();
    if (e.target.className === CLASSNAME.ENROLL_BUTTON) {
      const inputs = document.querySelectorAll(`.${CLASSNAME.ENROLL_INPUT}`);
      const inputValues = [...inputs].map(input => input.value);
      const newHabit = new Habit(...inputValues);
      this.enroll(newHabit);
    }
  };
}
