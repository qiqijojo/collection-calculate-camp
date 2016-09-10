'use strict';

function compute_average(collection) {
  //在这里写入代码
  return collection.reduce((cur,old)=>{
    return cur+(old/collection.length);
  },0);
}

module.exports = compute_average;

