'use strict';

function hybrid_operation_to_uneven(collection) {

  return collection.filter(obj=> {
    return obj % 2 != 0;
  }).map(item=> {
    return item * 3 + 2;
  })
}

module.exports = hybrid_operation_to_uneven;

