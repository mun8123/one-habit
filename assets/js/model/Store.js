import { STORAGE_KEY } from '../constant/constant.js';

export default class Store {
  constructor(defaultData) {
    this.storage = window.localStorage;
    this.data = this.getData() || defaultData;
    this.observers = [];
  }

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
    this.observers.forEach(observer => observer());
  };
}
