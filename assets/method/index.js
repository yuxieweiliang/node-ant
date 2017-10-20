
/**
 * 统一name的值
 * @param option
 * @returns {string}
 */
export const getName = (option) => {
  return option == 'add1' ? 'add' : option == 'history1' ? 'history' : option
}

/**
 * 私有 检查shape是否是 btn类型，
 * @param option
 * @param boolean
 * @returns {Array}
 * @private
 */
const _filter = (option, boolean) => {
  const array = []
  _.map(option, (children) => {
    const name = getName(children.widget_name)
    const exp = ['add','save','delete','history']

    if(typeof boolean == 'undefined' || typeof boolean == false) {
      // btn

      if(children.shape == 'textView' && exp.indexOf(name) >= 0) {
        if(children.widget_show_name == '历史记录') {
          array[0] = children
        } else if(children.widget_show_name == '新增') {
          array[1] = children
        } else if (children.widget_show_name == '保存') {
          array[2] = children
        } else if (children.widget_show_name == '删除') {
          array[3] = children
        }
      }
    } else {
      if(exp.indexOf(name) < 0) {
        array.push(children)
      }
    }
  })
  return array
}




/**
 * 重新适配list -> 获取页面布局使用，将response拆分为list与btn
 * 配合_filter使用
 * @param option
 * @returns {Array}
 */
export const getList = (option) => _filter(option, true)
export const getBtn = (option) => _filter(option)

/**
 * mixin handle 如果他是个obj，则将handle加到其中，如果是个集合，则加到集合中每一个元素上
 * @param options
 * @returns {Array}
 */
export const mixinHandle = (options) => {
  const {option, ...handle} = options
  // console.log(Object.prototype.toString.call(option))
  if(Object.prototype.toString.call(option) == '[object Object]') {
    return _.assign({}, option, { handle })
  } else {
    // alert(option)
    return _.map(option, (opt) => {
      if(opt.child) {
        return _.assign({}, opt, {
          handle,
          child: mixinHandle({
            option: opt.child,
            ...handle,
          })
        })
      } else {
        return _.assign({}, opt, { handle })
      }
    })
  }
}

/**
 * 适配type
 * @param option
 * @returns {string}
 */
const getType = (option) => {
   // console.log(option)
   // console.log(type)
  return option == 'Datetime' ? 'timerView'
    : option == 'DateTime' ? 'timerView'
    : option == 'Date' ? 'dateView'
    : option == 'date' ? 'dateView'
    : option == 'Time' ? 'hourView'
    : option == 'time' ? 'hourView'
    : option == 'TextView' ? 'textView'
    : option == 'textView' ? 'textView'
    : option == 'EditText' ? 'inputEdit'
    : option == 'ILLNESS_MEASURES' ? 'inputEdit'
    : option == 'ComboBox' ? 'comboBox'
    : option == 'Combobox' ? 'comboBox'
    : option == 'Level' ? 'level'
    : option == 'level' ? 'level'
    : option == 'Spinner' ? 'spinner'
    : option == 'TextArea' ? 'textArea'
    : option == 'totalscore' ? 'totalScore'
    : option == 'TotalScore' ? 'totalScore'
    : option == 'NurseSign' ? 'nurseSign'
    : option == 'RadioButton' ? 'radio'
    : option == 'radiobutton' ? 'radio'
    : option == 'CheckBox' ? 'checkbox'
    : option == 'radio' ? 'radio'
    : null
}

/**
 * 检查类型
 * @param option
 * @param key
 * @returns {boolean}
 */
export const typeOf = (option, key) => {
  if(key.toLowerCase() == 'string') {
    return Object.prototype.toString.call(option) == '[object String]'
  } else if(key.toLowerCase() == 'array') {
    return Object.prototype.toString.call(option) == '[object Array]'
  } else if(key.toLowerCase() == 'object') {
    return Object.prototype.toString.call(option) == '[object Object]'
  } else if(key.toLowerCase() == 'null') {
    return Object.prototype.toString.call(option) == '[object Null]'
  } else if(key.toLowerCase() == 'undefined') {
    return Object.prototype.toString.call(option) == '[object Undefined]'
  } else if(key.toLowerCase() == 'number') {
    return Object.prototype.toString.call(option) == '[object Number]'
  } else if(key.toLowerCase() == 'boolean') {
    return Object.prototype.toString.call(option) == '[object Boolean]'
  }
}
export const typeIs = (option) => {
  return Object.prototype.toString.call(option).slice(8, -1).toLowerCase()
}

/**
 * 转换小写Key
 * @param option
 * @returns {*}
 */
export const toLowKey =(option) => {
  const obj = {}

  if(typeOf(option, 'string') || typeOf(option, 'null') || typeOf(option, 'undefined') || typeOf(option, 'number')) {
    return option
  } else if(typeOf(option, 'array')) {
    return _.map(option, (val, k) => toLowKey(val))
  } else if(typeOf(option, 'object')) {
    _.each(option, (value, key) => {
      obj[key.toLowerCase()] = toLowKey(value)
    })
    return obj
  }
}
/**
 * 兼容页面，更换child
 * @param option
 * @returns {*}
 */
export const lowerKeyCase = (option) => {
  const data = toLowKey(option)

  // 如果是值类型就直接返回
  if(typeOf(option, 'string') || typeOf(option, 'null') || typeOf(option, 'undefined') || typeOf(option, 'number')) {
    return data
    // 如果是数组，则将每一个值都遍历递归调用
  } else if(typeOf(option, 'array')) {
    return _.map(data, (opt) => { // opt == json
      return lowerKeyCase(opt)
    })
    // 如果是obj，则将每一个K都替换小写，并添加字段 shape，和type字段，表示组建类型
  } else if(typeOf(option, 'object')) {
    const list = {}
    _.each(data, (value, key) => {
      if(key == 'multselect' || key == 'widget_type') {
        if(value == null) return // 防止其中某一个为null覆盖有值的
        list.type = getType(value)
        list.shape = getType(value)
      }
      // 兼容，现在服务器有几种写法，做成一种
      if(key == 'widget_name') {
        list.widget_name = getName(value)
      }

      list[key.toLowerCase()] = lowerKeyCase(value)
    })
    return list
  }
}


/**
 * 找到当前页面的 report_name
 * 如果有k，则将k的字段返回，否则返回id的集合
 * @param menu
 * @param id
 * @param key
 * @returns {*}
 */
export const getValueByKey = ({menu, id, key}) => {
  const array = _.filter(menu, (list) => list.id == id)[0]
  // console.log(id)
  if(key) {
    return array[key]
  } else return array

}
/**
 * 将url -> 转为json
 * @param option
 * @returns {{}}
 */
export const changeUrlToJson = (option) => {
  const array = option.replace('?', '').split('&')
  const json = {}
  _.map(array, (value) => {
    const val = value.split('=')
    json[val[0]] = val[1]
  })
  return json
}

/**
 * 更新 store
 * @param option
 * @param action
 * @returns {Array}
 */
export const replaceValue = ({option, action}) => {
  const { id, ...value } = action
  return _.map(option, (list) => {
    let children = list.child ? list.child.length : 0
    let result = null

    if(list.id == id) {
      result = { ...list, ...value }
    } else {
      if(children) {
        const child = replaceValue({option: list.child, action})
        // console.log(child)
        return { ...list, child }
      }
      result = list
    }
    return result
  })
}

/**
 * 将字符串转换为 base64
 * @param str
 * @returns {string}
 */
export const b64EncodeUnicode =(str) => {
  return btoa(encodeURIComponent(str)
    .replace(/%([0-9A-F]{2})/g, (match, p1) => {
      return String.fromCharCode('0x' + p1);
    })
  );
}

/**
 * 将base64转为中文
 * @param str
 * @returns {string}
 */
export const  b64DecodeUnicode = (str) => {
  // console.log(str)
  return decodeURIComponent(atob(str).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}


export const getOption = (option, REPORT_ID) => {
  const array = []
  const dataPush = (ITEM_NAME, ITEM_VALUE) => (
    ITEM_VALUE && array.push({REPORT_ID, ITEM_NAME, ITEM_VALUE})
  )
  _.map(option, (list) => {
    if(!list) return

    if(list.type == 'textView') {
      // child 为 日期 and 时间
      // console.log(list.type)
      if(list.widget_name == '日期和时间' || list.widget_name == '日期时间') {
        dataPush( '日期', list.date)
        dataPush( '时间', list.time)
      }
      // console.log(list.checked == null)
      if(list.checked == null) {
        // input & comBox & select 的值
        dataPush( list.widget_name, list.value)

        _.map(list.child, (item) => {
          item.value && dataPush( item.widget_name, item.value)
        })
        // 必须存在child
      } else if(list.checked == true && list.child && list.child.length > 0) {
        // radio & checkbox 的分数值
        _.map(list.child, (item) => {
          item.checked && dataPush( item.widget_name, item.scorepda)
        })
      }

      // 日期
    } else if(list.type == 'date') {
      // console.log(list.type)
      dataPush( list.widget_name, list.date)

      // 时间
    }  else if(list.type == 'time') {
      dataPush( list.widget_name, list.time)

      // 总分
    } else if(list.type == 'totalScore') {
      dataPush( list.widget_name, list.total_score)

      // comboBox & inputEdit
    } else if(list.type == 'comboBox' || list.type == 'inputEdit') {
      dataPush( list.widget_name, list.value)

    } else if(list.type == 'spinner') {
      list.value && dataPush( list.widget_name, list.value)
    } else if(list.type == 'inputEdit') {
      list.value && dataPush( list.widget_name, list.value)
    }
  })
  return array
}

/**
 * 将页面中所有的 value，全部清楚
 * @param lists
 * @returns {Array}
 */
export const clearValue = (lists) => {
  return _.map(lists, list => {
    const obj = {}
    _.each(list, (value, key) => {
      if(key != 'value' && key != 'date' && key != 'time' && key != 'checked') {
        if(key == 'child') {
          obj[key] = clearValue(value)
        } else {
          obj[key] = value
        }
      }else {
        console.log(key)
      }
    })
    return obj

  })
}