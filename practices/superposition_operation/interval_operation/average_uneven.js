'use strict';

function average_uneven(collection) {

  let oldNum = collection.filter(obj=>{
    return obj%2!==0;
  });
  return oldNum.reduce((init,cur)=>{
    return init+cur;
  })/oldNum.length;

}

module.exports = average_uneven;
