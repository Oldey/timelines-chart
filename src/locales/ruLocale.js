import { timeFormatLocale as d3TimeFormatLocale } from 'd3-time-format';
import {
  timeSecond as d3TimeSecond,
  timeMinute as d3TimeMinute,
  timeHour as d3TimeHour,
  timeDay as d3TimeDay,
  timeWeek as d3TimeWeek,
  timeMonth as d3TimeMonth,
  timeYear as d3TimeYear
} from 'd3-time';

const ruLocale = d3TimeFormatLocale({
  dateTime: '%A, %e %B %Y г. %X',
  date: '%d.%m.%Y',
  time: '%H:%M:%S',
  periods: ['AM', 'PM'],
  days: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
  shortDays: ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
  months: ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'],
  shortMonths: ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек']
});
const formatMillisecond = ruLocale.format(".%L"),
      formatSecond = ruLocale.format(":%S"),
      formatMinute = ruLocale.format("%-H:%M"),
      formatHour = ruLocale.format("%-H"),
      formatDay = ruLocale.format("%a %d"),
      formatWeek = ruLocale.format("%b %d"),
      formatMonth = ruLocale.format("%B"),
      formatYear = ruLocale.format("%Y");
function multiFormat(date) {
  return (d3TimeSecond(date) < date ? formatMillisecond
    : d3TimeMinute(date) < date ? formatSecond
    : d3TimeHour(date) < date ? formatMinute
    : d3TimeDay(date) < date ? formatHour
    : d3TimeMonth(date) < date ? (d3TimeWeek(date) < date ? formatDay : formatWeek)
    : d3TimeYear(date) < date ? formatMonth
    : formatYear)(date);
}

const labels = {
  from: 'С',
  to: 'По',
  resetZoom: 'Сбросить масштаб'
};

const timeFormat = '%d.%m.%Y %-H:%M';

export { multiFormat, labels, timeFormat };