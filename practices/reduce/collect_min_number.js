'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  return collection.reduce((cur,old)=>{
    return cur<old ? cur:old;
  })
}

module.exports = collect_min_number;

