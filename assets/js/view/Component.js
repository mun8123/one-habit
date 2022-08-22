import * as Element from './Element.js';
import { CHECK_ICON } from '../constant/constant.js';
import { isCheckedCalendarItem } from '../domain/validator.js';

export const HabitTitle = title => Element.Title(title);

export const HabitOptions = habitDetail => {
  const detailToArray = Object.entries(habitDetail);
  return detailToArray.reduce(
    (detailTemplate, [detailKey, detailValue]) =>
      (detailTemplate += Element.Text(detailValue, detailKey)),
    '',
  );
};

export const CalendarItem = (date, isChecked) => {
  return `<div class="calendar-item">
    <div class="date">${date}</div>
    <div class="content">${isChecked ? CHECK_ICON : ''}</div>
  </div>`;
};

export const calendarItemArray = (period, firstDate, isCheckedToday) => {
  const [_, month, date] = firstDate.split('/').map(Number);

  return Array.from({ length: period }, (_, i) => {
    const DateOfItem = `${month}/${date + i}`;
    return CalendarItem(
      DateOfItem,
      isCheckedCalendarItem(month, date + i, isCheckedToday),
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

export const CheckButton = text => {
  return Element.Button(text);
};
