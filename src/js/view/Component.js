import * as Element from './Element.js';
import { isCheckedCalendarItem, splitDateBySlash } from '../domain/calendar.js';
import { calculateDate, reduceDateToString } from '../utils/date.js';
import { PLACEHOLDER, CHECK_ICON } from '../constant/constant.js';
import {
  ENROLL_FORM,
  ENROLL_FORM_CLASSNAME,
} from '../constant/HabitEnrollFormConstant.js';

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
  return `<div class="${ENROLL_FORM_CLASSNAME.ENROLL_INPUT_BOX}">
  ${Element.Input(
    idName,
    ENROLL_FORM_CLASSNAME.ENROLL_INPUT,
    label,
    placeholder,
    isRequired,
  )}</div>`;
};

export const HabitEnrollForm = () => {
  const [title, [_, options]] = Object.entries(ENROLL_FORM);
  const optionsToArray = Object.entries(options);

  return `<div class="dim">
    <form class="${ENROLL_FORM_CLASSNAME.ENROLL_FORM}">
      ${HabitEnrollInput(title)}
      ${optionsToArray.reduce(
        (optionsTemplate, option) =>
          (optionsTemplate += HabitEnrollInput(option)),
        '',
      )}
      <input class="${
        ENROLL_FORM_CLASSNAME.ENROLL_BUTTON
      }" type="submit" value="등록" />
    </form>
  </div>`;
};

export const CalendarItem = (date, isChecked) => {
  return `<div class="calendar-item">
    <div class="date">${date}</div>
    <div class="content">${isChecked ? CHECK_ICON : ''}</div>
  </div>`;
};

export const calendarItemArray = (period, firstDate, isCheckedToday) => {
  const [year, month, date] = splitDateBySlash(firstDate);

  return Array.from({ length: period }, (_, i) => {
    const currentDate = date + i;
    const dateInArray = calculateDate(year, month, currentDate);
    const dateOfItem = reduceDateToString(dateInArray);
    return CalendarItem(
      dateOfItem,
      isCheckedCalendarItem(month, currentDate, isCheckedToday),
    );
  });
};

export const Calendar = (period, firstDate, isCheckedToday) => {
  const calendarItems = calendarItemArray(period, firstDate, isCheckedToday);
  return `<div class="calendar">
  ${calendarItems.reduce(
    (canlendarTemplate, item) => (canlendarTemplate += item),
    '',
  )}</div>`;
};

export const CheckButton = (text, className) => {
  return Element.Button(text, className);
};

export const EnrollFormOpenButton = (text, className) => {
  return Element.Button(text, className);
};
