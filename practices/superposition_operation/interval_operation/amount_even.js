'use strict';

function amount_even(collection) {

  return collection.filter(obj=>{
    return obj%2===0;
  }).reduce((init,cur)=>{
    return init+cur;
  })
}

module.exports = amount_even;
