const today = new Date();

export const getLastDateOfMonth = (year, month) =>
  new Date(year, month, 0).getDate();

export const todayInfo = {
  year: today.getFullYear(),
  month: today.getMonth() + 1,
  date: today.getDate(),
  day: today.getDay(),
};

export const isPastDate = (month, date) => {
  if (month > todayInfo.month) return false;
  if (month < todayInfo.month) return true;
  if (month === todayInfo.month) {
    if (date < todayInfo.date) return true;
    return false;
  }
};

export const isToday = (month, date) =>
  month === todayInfo.month && date === todayInfo.date;

export const calculateDate = (year, month, currentDate) => {
  const lastDateOfMonth = getLastDateOfMonth(year, month);
  if (currentDate > lastDateOfMonth) {
    return [month + 1, currentDate - lastDateOfMonth];
  }
  return [month, currentDate];
};

export const reduceDateToString = dateInArray => {
  const [month, date] = dateInArray;
  return month + '/' + date;
};
