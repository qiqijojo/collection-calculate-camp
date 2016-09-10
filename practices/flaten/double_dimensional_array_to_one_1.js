'use strict';

function double_to_one(collection) {

  //在这里写入代码
  return collection.reduce((cur,old)=>{
    return cur.concat(old);
  },[])
}

module.exports = double_to_one;
