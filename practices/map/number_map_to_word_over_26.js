'use strict';
var number_map_to_word_over_26 = function(collection){
  return collection.map(obj=>{
    let firstNum = parseInt(obj/26);
    let secondNum = obj%26;
    return firstNum === 0?
      String.fromCharCode(secondNum+96) : String.fromCharCode(firstNum+96)+String.fromCharCode(secondNum+96);
  });
};

module.exports = number_map_to_word_over_26;
