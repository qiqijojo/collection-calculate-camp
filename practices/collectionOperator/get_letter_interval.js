'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  let arr = [];
  let len = Math.abs(number_b - number_a);
  let brr = Array.from({length:len+1}, (v, k)=>String.fromCharCode(k+97));

  if (number_a === number_b) {
    arr.push(String.fromCharCode(number_a+96));
    return arr;
  } else if (number_a < number_b) {
    return brr;
  }else{
    return brr.reverse();
  }
}
module.exports = get_letter_interval;
