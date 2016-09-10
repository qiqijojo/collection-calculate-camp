'use strict';

function compute_median(collection) {
  //在这里写入代码

  let arr = collection.map(obj=>{
    return parseInt(obj);
  }).sort((a,b)=>{
    return a-b;
  });
  let len = arr.length%2;
  return len===0 ?
    (arr[arr.length/2]+arr[arr.length/2-1])/2 : arr[parseInt(arr.length / 2)];
}

module.exports = compute_median;


