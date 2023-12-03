const moment = require("moment");

let buses = [
  "65465f3a7a892d26d35e2ff6",
  "65465f3a7a892d26d35e2ff7",
  "65465f3a7a892d26d35e2ff8",
  "65465f3a7a892d26d35e2ff9",
  "65465f3a7a892d26d35e2ffa",
  "65465f3a7a892d26d35e2ffb",
  "65465f3a7a892d26d35e2ffc",
];

const times = [
  { hour: 7, minute: 0, second: 0, millisecond: 0 },
  {
    hour: 9,
    minute: 0,
    second: 0,
    millisecond: 0,
  },
  { hour: 12, minute: 0, second: 0, millisecond: 0 },
  { hour: 20, minute: 0, second: 0, millisecond: 0 },
  {
    hour: 21,
    minute: 30,
    second: 0,
    millisecond: 0,
  },
  {
    hour: 21,
    minute: 30,
    second: 0,
    millisecond: 0,
  },
];

function listOfTimes(date) {
  return times.map((item) => moment(date).utcOffset(0).set(item));
}
module.exports = { listOfTimes, buses };
