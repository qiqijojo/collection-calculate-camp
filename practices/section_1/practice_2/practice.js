function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  return collection_a.filter(obj_a=>{
    let brr = collection_b.reduce((cur,old)=>{
      return cur.concat(old);
      });
    return brr.some(obj_b=>{
      return obj_b===obj_a;
    })
  })
}

module.exports = collect_same_elements;
