const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let repeatArr = [];
  let repeatAddArr = [];
  let repeatAddStr;
  let additionSeparator = options.additionSeparator ? options.additionSeparator : '|';
  let separator = options.separator ? options.separator : '+';
  let repeatTimes = Number.isInteger(options.repeatTimes) ? options.repeatTimes : 1;
  let additionRepeatTimes = Number.isInteger(options.additionRepeatTimes) ? options.additionRepeatTimes : 1;

  if (options.addition !== undefined) {
    for (let i = 1; i <= additionRepeatTimes; i++) {
      repeatAddArr.push(options.addition + '');
    }
  }
  repeatAddStr = repeatAddArr.join(additionSeparator);

  for (let i = 1; i <= repeatTimes; i++) {
    repeatArr.push(str + repeatAddStr);
  }

  return repeatArr.join(separator);
};
  