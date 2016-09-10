'use strict';

function spilt_to_zero(number, interval) {
  let arr = [];
  let down = interval*10;
  let up = number*10;
  let num = parseInt(up/down);
  let rest = up%down;
  if(rest !== 0){
    num = num+1;
  }
  for(let i = 0;i<=num;i++){
    arr.push(parseFloat(up/10));
    up-=down;
  }
  return arr;
}

module.exports = spilt_to_zero;
