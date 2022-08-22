import { isToday, isPastDate } from '../utils/date.js';

export const isFilledCalendarItem = (month, date, isCheckedToday) =>
  isToday(month, date) && isCheckedToday;

export const isCheckedCalendarItem = (month, date, isCheckedToday) =>
  isPastDate(month, date) | isFilledCalendarItem(month, date, isCheckedToday);
