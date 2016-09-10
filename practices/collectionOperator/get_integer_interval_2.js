'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  let result = [];
  let a = number_a;
  let b = number_b;

  if(a === b){
    if(a % 2 ===0){
      result.push(a);
    }
  }else if(a < b) {
    for(let i=a;i<=b;i++){
      if(i%2===0){
        result.push(i);
      }
    }
  }else if(a > b){
    for(let j=a;j>=b;j--){
      if(j%2===0){
         result.push(j);
      }
    }
  }
  return result;
}

module.exports = get_integer_interval_2;
