function count_same_elements(collection) {
  //在这里写入代码
  let newArray = collection.map(item=>{
    let info = item.split('-');
    return {
      key:info[0],
      count:parseInt(info[1]) || 1
    };
  });
  return newArray.reduce((cur,old)=>{
    let exit = cur.find(obj=>{
      return obj.key===old.key;
    });
    if(exit){
      exit.count += old.count;
    }else{
      cur.push(old);
    }
    return cur;
  },[])
}

module.exports = count_same_elements;
