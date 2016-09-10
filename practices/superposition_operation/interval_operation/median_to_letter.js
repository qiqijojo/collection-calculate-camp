'use strict';

function median_to_letter(collection) {

  let num = collection.length%2===0 ?
    Math.ceil((collection[collection.length/2] + collection[(collection.length/2)-1])/2) : collection[parseInt(collection.length/2)];
    let num1 = parseInt(num/26),
        num2 = num % 26;
  return String.fromCharCode(num1+96)+String.fromCharCode(num2+96);
}

module.exports = median_to_letter;
