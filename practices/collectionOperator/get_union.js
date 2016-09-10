'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  let arr = collection_a.concat(collection_b);
  return arr.filter((obj,i,arr)=>{
    return arr.indexOf(obj)===i;
  })

}

module.exports = get_union;

