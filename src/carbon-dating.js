const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (!sampleActivity) {
    return false;
  }
  if (typeof sampleActivity !== 'string') {
    return false;
  }
  sampleActivity = parseInt(sampleActivity);
  if (!Number.isInteger(sampleActivity)) {
    return false;
  }
  if (parseInt(sampleActivity) > 2020 || parseInt(sampleActivity) <= 0) {
    return false;
  }
  const koef = Math.log(2) / HALF_LIFE_PERIOD;
  return Math.log(MODERN_ACTIVITY / parseInt(sampleActivity)) / koef;
};
