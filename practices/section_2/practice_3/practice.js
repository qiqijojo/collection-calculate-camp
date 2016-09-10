function count_same_elements(collection) {
  //在这里写入代码
  return collection.reduce((cur, item)=> {
    let result = cur.find(a=> {
      return a.name === item[0];
    });
    if (result) {
      result.summary += item[2] ? parseInt(item[2]) : 1;
    } else {
      cur.push(Object.assign({}, {name: item[0], summary: item[2] ? parseInt(item[2]) : 1}))
    }
    return cur;
  }, []);
}
//   let newArray = collection.map(item=> {
//     if (item.match('-')) {
//       let info = item.split('-');
//       return {
//         name: info[0],
//         summary: parseInt(info[1] || 1)
//       }
//     }else if(item.match('/:/')){
//       let info = item.split(':');
//       return {
//         name: info[0],
//         summary: parseInt(info[1] || 1)
//       }
//      }
//       // else if(item.match('[')){
//     //
//     // }
//     //   return {
//     //     name: info[0],
//     //     summary: parseInt(info[1] || 1)
//     //   }
//
//   });
//
//
//   return newArray.reduce((cur, old)=> {
//     let exit = cur.find(obj=> {
//       return obj.name === old.name;
//     });
//     if (exit) {
//       exit.summary += old.summary;
//     } else {
//       cur.push(old);
//     }
//     return cur;
//   }, [])
// }

module.exports = count_same_elements;
