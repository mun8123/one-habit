import * as element from './Element.js';

export const Habit = (isEditing, title) =>
  isEditing ? element.Input(title) : element.Title(title);

export const HabitDetail = habitDetail => {
  const detailToArray = Object.entries(habitDetail);
  return detailToArray.reduce(
    (detailTemplate, [detailKey, detailValue]) =>
      (detailTemplate += element.Text(detailValue, detailKey)),
    '',
  );
};

export const CalendarItem = date => {
  return `<div class="calendar-item">
    <div class="date">${date}</div>
    <div class="content"></div>
  </div>`;
};

export const Calendar = (challengePeriod, month, date) => {
  const calendarItems = Array.from({ length: challengePeriod }, (_, i) => {
    return CalendarItem(`${month}/${date + i}`);
  });

  return calendarItems.reduce(
    (canlendarTemplate, item) => (canlendarTemplate += item),
    '',
  );
};
