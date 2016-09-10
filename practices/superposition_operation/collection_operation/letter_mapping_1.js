'use strict';

function even_to_letter(collection) {
  return collection.filter(obj=>{
    return obj%2===0;
  }).map(obj=>{
    return String.fromCharCode(obj+96);
  })
}

module.exports = even_to_letter;
