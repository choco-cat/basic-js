const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let counter = 0;
  matrix.forEach(function (item) {
    item.forEach(function (item2) {
      if (item2 === '^^') {
        counter++;
      }
    });
  });

  return counter;
};
