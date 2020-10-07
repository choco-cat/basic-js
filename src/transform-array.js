const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error;
  }

  const myArr = [...arr];
  const operations = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
  const newArr = [];

  for (let i = 0; i < myArr.length; i++) {
    switch (myArr[i]) {
      case '--discard-next':
        myArr.splice(i + 1, 1);
        break;
      case '--discard-prev':
        if (i > 0 && operations.indexOf(myArr[i - 1]) === -1) {
          newArr.pop();
          myArr.splice(i - 1, 1);
          i--;
        }
        break;
      case '--double-next':
        if (i < myArr.length - 1) {
          newArr.push(myArr[i + 1]);
        }
        break;
      case '--double-prev':
        if (newArr.length > 0 && operations.indexOf(myArr[i - 1]) === -1) {
          newArr.push(myArr[i - 1]);
        }
        break;
      default:
        newArr.push(myArr[i]);
    }
  }

  return newArr;
};
