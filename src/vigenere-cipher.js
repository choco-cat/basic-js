const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(right = true) {
    this.right = right;
    this.letters = [];
    this.square = [];
  }

  init(message, key) {
    this.letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    for (let i = 0; i < this.letters.length; i++) {
      this.square[i] = this.letters.slice(i).concat(this.letters.slice(0, i));
    }
    let keyLength = key.length;
    for (let i = keyLength; i < message.length; i++) {
      key += key[i - keyLength];
    }
    this.key = key.toUpperCase();
    this.message = message.toUpperCase();
  }

  encrypt(message, key) {
    this.init(message, key);
    let myString = "";
    let j = 0;
    for (let i = 0; i < this.message.length; i++) {
      let col = this.letters.indexOf(this.message[i]);
      let row = this.letters.indexOf(this.key[j]);
      if (this.letters.indexOf(this.message[i]) === -1) {
        myString += this.message[i];
      } else {
        myString += this.square[col][row];
        j++;
      }
    }
    return this.right ? myString : myString.split("").reverse().join("");
  }

  decrypt(message, key) {
    this.init(message, key);
    let myString = "";
    let j = 0;
    for (let i = 0; i < this.message.length; i++) {
      let row = this.letters.indexOf(this.key[j]);
      let col = this.square[row].indexOf(this.message[i]);
      if (col === -1) {
        myString += this.message[i];
      } else {
        myString += this.letters[col];
        j++;
      }
    }
    return this.right ? myString : myString.split("").reverse().join("");
    ;
  }
}

module.exports = VigenereCipheringMachine;
