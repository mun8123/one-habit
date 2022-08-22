const today = new Date();

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
