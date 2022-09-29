import { todayInfo } from '../utils/date.js';
import { DEFAULT_TITLE_TEXT } from '../constant/constant.js';

export default class Habit {
  constructor({ title, createdAt, options }) {
    this.title = title || DEFAULT_TITLE_TEXT;
    this.options = options || {
      time: '',
      location: '',
    };
    this.createdAt =
      createdAt || `${todayInfo.year}/${todayInfo.month}/${todayInfo.date}`;
  }
}
