'use strict';
var single_element = function(collection){
    let evenPlace = collection.filter((obj,i)=>{
      return i%2!==0;
    });
    let arr = evenPlace.map(obj=>{
      return {
        name:obj,
        count:1
      }
    });
    let newArr = arr.reduce((init,cur)=>{
      let exist = init.find(obj=>{
        return obj.name === cur.name;
      });
      if(exist){
        exist.count+=cur.count;
      }else{
        init.push(cur);
      }
      return init;
    },[]);
  return newArr.filter(item=>{
    return item.count === 1;
  }).map(obj=>{
    return obj.name;
  })

};
module.exports = single_element;
