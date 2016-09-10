'use strict';
var even_group_calculate_average = function (collection) {

  let arr = [];
  let evenIndex = collection.filter((obj,i)=> {
    return i % 2 !== 0;
  });
  let evenNum = evenIndex .filter(item=> {
    return item % 2 === 0;
  });
  if(evenNum.length !== 0) {            //如果存在偶数值
    //一位数集合  平均数
    let arr1 = evenNum.filter(obj=> {
      return obj.toString().length === 1;
    });
      let num1 = arr1.reduce((init, cur)=> {
          return init + cur;
        }, 0) / arr1.length;

    //二位数集合  平均数
    let arr2 = evenNum.filter(obj=> {
      return obj.toString().length === 2;
    });
    let num2 = arr2.reduce((init, cur)=> {
        return init + cur;
      },0) / arr2.length;

    //三位数集合  平均数
    let arr3 = evenNum.filter(obj=> {
      return obj.toString().length === 3;
    });
    let num3 = arr3.reduce((init, cur)=> {
        return init + cur;
      },0) / arr3.length;

if(arr1.length===0&&arr2.length===0){
    arr.push(num3);
}else{
    arr.push(num1, num2, num3);
}
  }else{
    arr.push(0);
  }
  return arr;
};
module.exports = even_group_calculate_average;
