'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  let arr = collection.split('->').map(item=>{
    return parseInt(item);
  }).sort((a,b)=>{
    return a-b;
  });
  let len = arr.length;
  return len%2===0?(arr[len/2]+arr[(len/2) - 1])/2:arr[parseInt(len/2)];

}

module.exports = compute_chain_median;
