'use strict';
var calculate_median = function(collection){
  let evenNum = collection.filter((obj,i)=>{
    return i%2!==0;
  });

  return (evenNum.length%2)===0 ?
    parseInt((evenNum[evenNum.length/2]+evenNum[evenNum.length/2-1])/2) : evenNum[parseInt(evenNum.length/2)];
};
module.exports = calculate_median;
