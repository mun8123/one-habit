import { STORAGE_KEY } from './constant.js';

export default class Store {
  constructor() {
    this.storage = window.localStorage;
    this.data = this.getData();
  }

  setData = (data, key = STORAGE_KEY) => {
    this.storage.setItem(key, JSON.stringify(data));
  };

  getData = (key = STORAGE_KEY) => {
    const json = this.storage.getItem(key);
    return JSON.parse(json);
  };
}
