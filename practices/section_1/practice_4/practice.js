function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  return collection_a.map(obj=>{
    return obj.key;
  }).filter(obj_a=>{
    return object_b.value.some(obj_b=>{
      return obj_b===obj_a;
    })
  })
}

module.exports = collect_same_elements;
