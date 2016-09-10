'use strict';
var map_to_four_multiples_add_one = function(collection){
  return collection.map(obj=>{
    return 4 * obj + 1;
  })
};

module.exports = map_to_four_multiples_add_one;
