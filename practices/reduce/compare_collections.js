'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  return collection_a.reduce((obj_a,obj_b,i,collection_a)=>{
    return obj_b === collection_b[i];
  },[]);
}

module.exports = compare_collections;


