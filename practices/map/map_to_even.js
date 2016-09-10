'use strict';
function map_to_even(collection){
  return collection.map(obj=>{
    return 2 * obj;
  })
}
module.exports = map_to_even;
