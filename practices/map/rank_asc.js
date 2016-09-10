'use strict';
var rank_asc = function(collection){
  return collection.sort((a,b)=>{
    if(a>b){
      return -1;
    }else if(a<b){
      return 1;
    }else{
      return 0;
    }
  });
};

module.exports = rank_asc;
