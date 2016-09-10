function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
let newB = object_b.value.map(item=>{
  return {
    key:item
  }
});
  let newA = collection_a.concat(newB);
  return newA.reduce((cur,old)=>{
    let exist = cur.find(item=>{
      return item.key === old.key;
    });
    if(exist){
        exist.count = exist.count - parseInt(exist.count/3);
      }else{
        cur.push(old);
      }
    return cur;
  },[])
}

module.exports = create_updated_collection;
