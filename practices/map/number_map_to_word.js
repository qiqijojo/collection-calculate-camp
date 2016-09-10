'use strict';
var number_map_to_word = function(collection){
  return collection.map(obj=>{
    return String.fromCharCode(obj+96);
  });
};

module.exports = number_map_to_word;
