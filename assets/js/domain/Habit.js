import { todayInfo } from '../utils/date.js';
import { DEFAULT_TITLE_TEXT } from '../constant/constant.js';

export default class Habit {
  constructor(title = DEFAULT_TITLE_TEXT, time = '', location = '') {
    this.title = title;
    this.options = {
      time: time,
      location: location,
    };
    this.createdAt = `${todayInfo.year}/${todayInfo.month}/${todayInfo.date}`;
  }
}
