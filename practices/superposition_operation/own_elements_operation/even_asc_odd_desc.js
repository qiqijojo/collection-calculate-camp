'use strict';
var even_asc_odd_desc = function(collection){
    let old = collection.filter(obj=>{
      return obj%2!==0;
    }).sort((a,b)=>{
      return b-a;
    });
    let even = collection.filter(obj=>{
      return obj%2===0;
    }).sort((a,b)=>{
      return a-b;
    });
  return even.concat(old);

};
module.exports = even_asc_odd_desc;
