import * as Element from './Element.js';
import { CHECK_ICON } from '../constant/constant.js';
import { isPastDate } from '../utils/date.js';

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

export const Calendar = (period, firstDate) => {
  const [_, month, date] = firstDate.split('/').map(Number);

  const calendarItems = Array.from({ length: period }, (_, i) => {
    const isChecked = isPastDate(month, date + i);
    return CalendarItem(`${month}/${date + i}`, isChecked);
  });

  return calendarItems.reduce(
    (canlendarTemplate, item) => (canlendarTemplate += item),
    '',
  );
};

export const CheckButton = text => {
  return Element.Button(text);
};
