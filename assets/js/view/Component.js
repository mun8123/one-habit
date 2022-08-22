import * as Element from './Element.js';
import {
  isCheckedCalendarItem,
  splitDateBySlash,
  getDateOfCalendarItem,
} from '../domain/calendar.js';
import { PLACEHOLDER, CHECK_ICON, CLASSNAME } from '../constant/constant.js';
import { ENROLL_FORM } from '../constant/HabitEnrollFormConstant.js';
import { getLastDateOfMonth } from '../utils/date.js';

export const HabitTitle = title => Element.Title(title);

export const HabitOptions = habitDetail => {
  const detailToArray = Object.entries(habitDetail);
  return detailToArray.reduce(
    (detailTemplate, [detailKey, detailValue]) =>
      (detailTemplate += Element.Text(detailValue, detailKey)),
    '',
  );
};

export const HabitEnrollInput = elementData => {
  const [_, { idName, label, isRequired }] = elementData;
  const placeholder = isRequired
    ? PLACEHOLDER.requiredInput
    : PLACEHOLDER.optionalInput;
  return Element.Input(
    idName,
    CLASSNAME.ENROLL_INPUT,
    label,
    placeholder,
    isRequired,
  );
};

export const HabitEnrollForm = () => {
  const [title, [_, options]] = Object.entries(ENROLL_FORM);
  const optionsToArray = Object.entries(options);

  return `<form class="${CLASSNAME.ENROLL_FORM}">
    ${HabitEnrollInput(title)}
    ${optionsToArray.reduce(
      (optionsTemplate, option) =>
        (optionsTemplate += HabitEnrollInput(option)),
      '',
    )}
    <input class="${CLASSNAME.ENROLL_BUTTON}" type="submit" value="등록">
  </form>`;
};

export const CalendarItem = (date, isChecked) => {
  return `<div class="calendar-item">
    <div class="date">${date}</div>
    <div class="content">${isChecked ? CHECK_ICON : ''}</div>
  </div>`;
};

export const calendarItemArray = (period, firstDate, isCheckedToday) => {
  let [year, month, date] = splitDateBySlash(firstDate);

  return Array.from({ length: period }, (_, i) => {
    const currentDate = date + i;
    const DateOfItem = getDateOfCalendarItem(year, month, currentDate);

    return CalendarItem(
      DateOfItem,
      isCheckedCalendarItem(month, currentDate, isCheckedToday),
    );
  });
};

export const Calendar = (period, firstDate, isCheckedToday) => {
  const calendarItems = calendarItemArray(period, firstDate, isCheckedToday);
  return calendarItems.reduce(
    (canlendarTemplate, item) => (canlendarTemplate += item),
    '',
  );
};

export const CheckButton = (text, className) => {
  return Element.Button(text, className);
};
