'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  let result = [];
  let len = Math.abs(number_a - number_b);
  let arr = Array.from({length: len + 1}, (v, k)=>k + 1);

  if (number_a === number_b) {
    result.push(number_a);
    return result;
  } else if (number_a < number_b) {
    return arr;
  } else {
    return arr.reverse();
  }
}

module.exports = get_integer_interval;

