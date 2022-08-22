import { getLastDateOfMonth, isToday, isPastDate } from '../utils/date.js';

export const isFilledCalendarItem = (month, date, isCheckedToday) =>
  isToday(month, date) && isCheckedToday;

export const isCheckedCalendarItem = (month, date, isCheckedToday) =>
  isPastDate(month, date) | isFilledCalendarItem(month, date, isCheckedToday);

export const splitDateBySlash = dateWithSlash =>
  dateWithSlash.split('/').map(Number);

export const calculateDateOfItem = (year, month, currentDate) => {
  const lastDateOfMonth = getLastDateOfMonth(year, month);
  let DateOfItem = '';

  if (currentDate > lastDateOfMonth) {
    DateOfItem = `${month + 1}/${currentDate - lastDateOfMonth}`;
  } else {
    DateOfItem = `${month}/${currentDate}`;
  }

  return DateOfItem;
};
