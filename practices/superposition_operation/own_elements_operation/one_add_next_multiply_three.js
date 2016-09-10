'use strict';
function one_add_next_multiply_three(collection){
  //return [12,24,36,48,60,72,84,96,108,120];
  let arr = collection.map((obj,i)=>{
    return (obj+collection[i+1])*3;
  });
  let result = arr.pop();
  return arr;

}
module.exports = one_add_next_multiply_three;
