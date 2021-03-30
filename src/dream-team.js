const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let filt = members.filter(el => typeof el === "string");
  return filt.map(el => el[0]).sort().join('').toUpperCase();
};
