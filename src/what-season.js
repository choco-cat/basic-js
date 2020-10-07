const CustomError = require("../extensions/custom-error");
module.exports = function getSeason(date) {
  date1 = new Date('December 17, 1995 03:24:00');
  if (!date) {
    return 'Unable to determine the time of year!'
  }
  if (!(date instanceof Date)) {
    throw new Error('THROWN');
  }

  let season = false;
  if (date.getUTCMonth() === 11 || date.getUTCMonth() >= 0 && date.getUTCMonth() <= 1) {
    season = 'winter';
  } else if (date.getUTCMonth() >= 2 && date.getUTCMonth() <= 4) {
    season = 'spring';
  } else if (date.getUTCMonth() >= 5 && date.getUTCMonth() <= 7) {
    season = 'summer';
  } else if (date.getUTCMonth() >= 8 && date.getUTCMonth() <= 10) {
    season = 'autumn';
  }
  return season;
};
