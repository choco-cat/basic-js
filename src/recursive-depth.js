const CustomError = require("../extensions/custom-error");

Array.prototype.max = function () {
  return Math.max.apply(0, this);
};

module.exports = class DepthCalculator {
  calculateDepth(arr, level = 1) {
    if (Array.isArray(arr)) {
      if (arr.length === 0) {
        arr.push('');
      }

      return arr
        .map((value) => this.calculateDepth(value, level + 1))
        .max() - (level > 1 ? 0 : 1);
    }

    return level;
  }
};
