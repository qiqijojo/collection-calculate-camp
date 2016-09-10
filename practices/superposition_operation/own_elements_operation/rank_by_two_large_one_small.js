'use strict';
function rank_by_two_large_one_small(collection) {

  let sortArr = collection.sort((a, b)=> {
    return a - b;
  });
  var brr = [];
  for(let i=0;i<Math.floor(sortArr.length/3);i++){
    brr.push(sortArr.splice(2*i,1)[0]);
  }
  for(let j=0;j<brr.length;j++){
    sortArr.splice(2+3*j,0,brr[j])
  }
  return sortArr;
}
module.exports = rank_by_two_large_one_small;
