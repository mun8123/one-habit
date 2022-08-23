import { STORAGE_KEY } from './constant/constant.js';
import Challenge from './domain/challenge.js';
import Habit from './domain/Habit.js';

export default class Store {
  constructor() {
    this.storage = window.localStorage;
    this.data = this.getData() || this.defaultData;
    this.observers = [];
  }

  defaultData = {
    habit: new Habit(),
    challenge: new Challenge(),
  };

  setData = (data, key = STORAGE_KEY) => {
    this.storage.setItem(key, JSON.stringify(data));
  };

  getData = (key = STORAGE_KEY) => {
    const json = this.storage.getItem(key);
    return JSON.parse(json);
  };

  subscribe = observer => {
    this.observers.push(observer);
  };

  updateData = newData => {
    this.setData(newData);
    this.data = this.getData();
    this.observers.forEach(observer => observer(this.data));
  };
}
