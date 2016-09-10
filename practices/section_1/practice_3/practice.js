function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  return collection_a.filter(obj_a=>{
    return object_b.value.some(obj=>{
      return obj_a===obj;
    })
  })
}

module.exports = collect_same_elements;
