'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码
  return collection.filter((item,i,collection)=>{
    return collection.indexOf(item)===i;
  })
}

module.exports = choose_no_repeat_number;
