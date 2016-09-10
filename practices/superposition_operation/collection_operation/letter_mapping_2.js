'use strict';

function average_to_letter(collection) {
  return String.fromCharCode(Math.ceil(collection.reduce((a, b)=> {
        return a + b;
      }) / collection.length) + 96);
}

module.exports = average_to_letter;

