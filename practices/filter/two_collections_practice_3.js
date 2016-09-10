'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码
  return collection_a.filter(obj_a=>{
    return collection_b.some(obj_b=>{
      return obj_a % obj_b === 0;
    })
  })
}

module.exports = choose_divisible_integer;
