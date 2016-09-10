'use strict';

function double_to_one(collection) {

  //在这里写入代码
  return collection.reduce((cur,old)=>{
    return cur.concat(old);
  },[]).filter((obj,i,arr)=>{
    return arr.indexOf(obj) === i;
  })
}

module.exports = double_to_one;
