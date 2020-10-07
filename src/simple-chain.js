const CustomError = require("../extensions/custom-error");

const chainMaker = {
  linkChain: [],
  getLength() {
    return this.linkChain.length;
  },
  addLink(value) {
    this.linkChain.push("( " + value + " )");
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position <= 0 || position > this.linkChain.length) {
      this.linkChain = [];
      throw Error;
    }
    this.linkChain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.linkChain = this.linkChain.reverse();
    return this;
  },
  finishChain() {
    const cloneLinkChain = this.linkChain.slice();
    this.linkChain = [];
    return cloneLinkChain.join("~~");
  }
};

module.exports = chainMaker;
