function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  let items = collection_a.map(item=> {
    return {
      key: item,
      count: 1
    }
  });
  let collection_c = items.reduce((cur, old)=> {
    let exist = cur.find(item=> {
      return item.key === old.key;
    });
    if (exist) {
      exist.count += old.count;
    } else {
      cur.push(old);
    }
    return cur;
  }, []);
  let newB = object_b.value.map(item=>{
    return {
      key:item
    }
  });
  let arr = collection_c.concat(newB);
  return arr.reduce((cur,old)=>{
    let result = cur.find(obj=>{
      return obj.key === old.key;
    });
    if(result){
      result.count = result.count - parseInt(result.count/3);
    }else{
      cur.push(old);
    }
    return cur;
  },[])
}

module.exports = create_updated_collection;
