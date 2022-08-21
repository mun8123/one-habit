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
