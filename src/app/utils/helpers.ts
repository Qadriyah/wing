import moment from "moment";

export const convertTimeToHoursMin = (time: number) => {
  const temp = moment.duration(time);
  return temp.hours() + "h " + temp.minutes() + "m";
};

export const formatCurrency = (amount: number, currency = "$") => {
  const obj = new Intl.NumberFormat("en-US");
  return `${currency}${obj.format(amount)}`;
};
