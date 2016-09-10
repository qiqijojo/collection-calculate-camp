'use strict';

function hybrid_operation(collection) {

  return collection.map(item=> {
    return item * 3 + 2;
  }).reduce((init, cur)=> {
    return init + cur;
  })
}

module.exports = hybrid_operation;

