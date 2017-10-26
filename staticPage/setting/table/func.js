import React from 'react';
export let menuId = (function() {
  let id = 0
  return () => id++
})()

/**
 * 将数组展评
 * @param data
 * @param childrenName
 * @returns {Array}
 */

export function flatArray(data = [], childrenName = 'children') {
  const result = []
  const loop = (array) => {
    array.forEach(item => {
      // 重新拷贝一个数组
      const newItem = { ...item };
      // 删除掉数组中的children
      delete newItem[childrenName];
      // 将她添加到数组中
      result.push(newItem);

      // 如果有children 则递归
      if (item[childrenName] && item[childrenName].length > 0) {
        loop(item[childrenName]);
      }
    })
  }
  loop(data);
  return result
}

export function flatFilter(tree = [], callback) {
  return tree.reduce((acc, node) => {
    if (callback(node)) {
      acc.push(node);
    }
    if (node.children) {
      const children = flatFilter(node.children, callback);
      acc.push(...children);
    }
    return acc;
  }, []);
}


export function normalizeColumns(elements) {
  const columns = [];
  React.Children.forEach(elements, (element) => {
    if (!React.isValidElement(element)) {
      return;
    }
    const column = {
      ...element.props,
    };
    if (element.key) {
      column.key = element.key;
    }

    if (element.type && (element.type).__ANT_TABLE_COLUMN_GROUP) {
      column.children = normalizeColumns(column.children);
    }
    columns.push(column);
  });
  return columns;
}


export function treeMap(tree, mapper, childrenName = 'children') {
  return tree.map((node, index) => {
    const extra = {};
    if (node[childrenName]) {
      extra[childrenName] = treeMap(node[childrenName], mapper, childrenName);
    }
    return {
      ...mapper(node, index),
      ...extra,
    };
  });
}








export function _getData(arr) {
  let i = 0
  arr.map(item => {
    if(item._length) {
      i += item._length
    }
  })
  return i
}

export function _getRow(option) {
  let key = [],
    keys=[]

  function _row(opt) {

    return _.map(opt, (item, i) => {
      // 首先递归子节点的个数
      let child = null

      // 计算子节点的个数
      let length = null


      if(item.props.children && item.props.children.length > 0) {


        // 首先递归子节点的个数
        child = _row(item.props.children)

        // 计算子节点的个数
        length = _getData(child)
        return {
          item,
          _length: length,
          child
        }
      } else if(typeOf(item.props.children) === 'object') {

        // 首先递归子节点的个数///  这个是只有一个子节点的时候才会出现的情况。这种情况是不应该的。
        child = _row([item.props.children])

        return {
          item,
          _length: 1,
          child
        }
      } else {
        key.push(item.key)
        keys.push({
          key: item.key,
          fixed: item.props.fixed
        })
        return {
          item,
          _length: 1,
          fixed: item.props.fixed,
        }
      }

    })
  }

  let childItem = _row(option)

  // console.log(childItem)
  return {
    keys,
    key,
    child: childItem
  }
}

export function _getLength(option) {
  let m = []

  function _row(opt) {
    let array = []
    opt.map(list => {
      if(list.children) {
        array = array.concat(list.children)
      }
    })
    return array
  }


  m.push(option)


  function func(i) {
    let row = _row(m[i])

    if(row && row.length > 0) {

      m.push(row)
    }

    i++

    if(m[i] && m[i].length > 0) {
      func(i)
    }
  }


  func(0)
  return m
}



/*



let dataSet =  {
  scroll: {
    keys: childrens.key,
    header: child,
    body: dataSource
  },
  left: {
    key: [],
    header: [],
    body: []

  },
  right: {
    key: [],
    header: [],
    body: []

  }
}
// console.log(childrens)
child[0].map(item => {
  if(item.fixed) {
    dataSet[item.fixed].header.push({
      ...item,
      key: item.item.key
    })
  }
})
childrens.keys.map((item, i) => {
  if(item.fixed) {

    dataSet[item.fixed].key.push(item)
    dataSet[item.fixed].body.push(dataSource.map(i => i[item.key]))
  }
})



*/
