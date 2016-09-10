'use strict';
var calculate_average = function(collection){
    let evenNum = collection.filter((obj,i)=>{
      return i%2!==0;
    });
  return evenNum.reduce((init,cur)=>{
    return init+cur;
  })/evenNum.length;
};
module.exports = calculate_average;
