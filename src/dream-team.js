const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  return members
    .map((item) => (typeof item === 'string') ? item.trim().charAt().toUpperCase() : '')
    .sort()
    .join('');
};
