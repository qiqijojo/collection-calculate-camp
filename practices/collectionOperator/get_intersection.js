'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  return collection_b.filter((b)=>{
    return collection_a.some((a)=>{
      return a===b;
    })
  })
}

module.exports = get_intersection;
