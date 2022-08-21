import Store from './Store.js';
import HabitTrackerPage from './view/HabitTrackerPage.js';

export default class OneHabit {
  constructor() {
    this.store = new Store();
    this.page = new HabitTrackerPage();
    this.habit = this.store.data;
    this.isEditing = false;
    
    this.page.render(this.habit);
  }
}
