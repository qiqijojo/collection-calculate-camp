'use strict';
var is_exist_element = function(collection,element){
    return collection.some((obj,i)=>{
      return i%2===0 && obj===element;
    })
};
module.exports = is_exist_element;
