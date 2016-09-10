'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码

  let len = Math.abs(number_a - number_b);
  let min = Math.min(number_a, number_b);
  let direction = number_a < number_b;
  let result = Array.from({length: len + 1}, (v, k)=>k + min);
  if (!direction) {
    result.reverse();
  }
  return result.map(transToLetter);
}
function transToLetter(num){
  let second_part = Array.from({length:26}, (v, k)=>String.fromCharCode(k + 97));
  let first_part = [''].concat(second_part);
  num-=1;
  let first_index = parseInt(num / 26);
  let second_index = num % 26;
  return first_part[first_index]+second_part[second_index];
}

module.exports = get_letter_interval_2;

