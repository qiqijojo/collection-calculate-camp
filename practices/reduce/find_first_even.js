'use strict';

function find_first_even(collection) {
  //在这里写入代码
  let element = collection.findIndex(obj=>{
    return obj%2===0;
  });
  return collection[element];
}

module.exports = find_first_even;

