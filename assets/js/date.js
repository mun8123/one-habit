const today = new Date();

export const todayInfo = {
  year: today.getFullYear(),
  month: today.getMonth() + 1,
  date: today.getDate(),
  day: today.getDay(),
};
