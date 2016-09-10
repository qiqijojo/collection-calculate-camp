'use strict';

function grouping_count(collection) {

  //在这里写入代码
  let result = {};
  let arr = collection.filter((obj,i,collection)=>{
    return collection.indexOf(obj)===i;
  });
  arr.map(tag=>{
    let collections = collection.sort();
    result[tag.toString()] = collections.lastIndexOf(tag)-collections.indexOf(tag)+1;
  });
  return result;
}

module.exports = grouping_count;
