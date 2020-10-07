const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const hanoiObj = {
    turns: 0,
    seconds: 0
  };

  hanoiObj.turns = Math.pow(2, disksNumber) - 1;
  hanoiObj.seconds = Math.floor(hanoiObj.turns / (turnsSpeed / 3600));

  return hanoiObj;
};
