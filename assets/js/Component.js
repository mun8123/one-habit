import * as element from './Element.js';

export const Habit = (isEditing, title) =>
  isEditing ? element.Input(title) : element.Title(title);

