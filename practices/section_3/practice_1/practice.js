function create_updated_collection(collection_a, object_b) {
  //在这里写入代码

  // let newA = collection_a.map(item=>{    //为了将count变为整型，以防万一，，不过不需要，count本来就是整型。
  //   return {
  //     key:item.key,
  //     count:parseInt(item.count)
  //   }
  // });
  let newB = object_b.value.map(item=>{
    return {
      key:item,
      count:1                                  //count：-1
    }
  });
  let arr = collection_a.concat(newB);
  return arr.reduce((cur,old)=>{
    let exit = cur.find(obj=>{
      return obj.key === old.key;
    });
    if(exit){
      exit.count -= 1;   //或者写成exit.count += old.count;    其中 newB的count为-1；
    }else{
      cur.push(old);
    }
    return cur;
  },[]);
}

module.exports = create_updated_collection;
