import React, { Component } from 'react'
import { render } from 'react-dom'
import data from './data'
import _ from 'lodash'
import kn from '../../../assets/server'
import { typeOf } from '../../../assets/func'
import '../../style/main.less'
import warning from 'warning'

let menuId = (function() {
  let id = 0
  return () => id++
})()


function _getData(arr) {
  let i = 0
  arr.map(item => {
    if(item._length) {
      i += item._length
    }
  })
  return i
}

function _getRow(option) {
  let key = []
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

        // 首先递归子节点的个数
        child = _row([item.props.children])

        return {
          item,
          _length: 1,
          child
        }
      } else {
        key.push(item.key)
        return {
          item,
          _length: 1,
        }
      }

    })
  }

  let childItem = _row(option)

  // console.log(childItem)
  return {
    key,
    child: childItem
  }
}

function _getLength(option) {
  var m = []

  function _row(opt) {
    var array = []
    opt.map(list => {
      if(list.child) {
        array = array.concat(list.child)
      }
    })
    return array
  }


  m.push(option.child)


  function func(i) {
    var row = _row(m[i])

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

class TableLeft extends Component {
  constructor(props) {
    super(props)
  }
  static defaultProps = {
    col: {width: '200px'},
    item: [{width: '200px'}]
  }
  render() {
    const { children } = this.props
    const item = _getRow(children)
    let child = _getLength(item)



    return (
      <div className="table-fixed-left">

        <TableHeader  allkey={item.key} width="100px" child={child} {...this.props}/>

        <TableBody ref="tableLeft" allkey={item.key} width='100px' minWidth='100px' {...this.props}/>

      </div>
    )
  }
}
class TableRight extends Component {
  constructor(props) {
    super(props)
  }
  static defaultProps = {
    col: {width: '300px'},
    item: [{width: '300px'}]
  }
  render() {
    const { children } = this.props
    const item = _getRow(children)
    let child = _getLength(item)
    return (
      <div className="table-fixed-right">

        <TableHeader  allkey={item.key} child={child}  width="100px" {...this.props}/>

        <TableBody ref="tableRight" allkey={item.key}  width='100px' minWidth='100px' {...this.props}/>
      </div>
    )
  }
}






class ColumnGroup extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<tr height={this.props.height}>{ this.props.children }</tr>)
  }
}
class Column extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { context, colSpan, rowSpan } = this.props
    return (<th colSpan={colSpan} rowSpan={rowSpan}>{ context }</th>)
  }
}



class Group extends Component {
  render() {
    const { col, leftCol, rightCol, allkey } = this.props
    return(
      <colgroup>
        {
          _.map(col, (item, i) => {

            if(leftCol) {
              if(i < leftCol) {
                return (<col key={i} style={{width: item, minWidth: item}}/>)
              }else return
            }

            if(rightCol) {
              if(allkey.length - i-1 < rightCol) {
                return (<col key={i} style={{width: item, minWidth: item}}/>)
              }else return
            }

            return <col key={i} style={{width: item, minWidth: item}}/>


          })
        }
      </colgroup>
    )
  }
}



class TableHeader extends Component {
  constructor(props) {
    super(props);
  }

  _renderHeader() {
    let _this = this
    let { children, child, leftCol, rightCol } = this.props
    let childs = null

    childs = child.map((list, i) => {
      return list.map((item, j) => {
        let rowSpan = child.length - i
        if(item.child) {

          return (
            <Column key={i + '' + j} colSpan={item._length} context={item.item.props.context}/>
          )
        } else {
          return <Column key={i + '' + j} rowSpan={rowSpan} {...item.item.props}/>
        }
      })
    })

    if(leftCol > 0) {
      childs = childs[0].filter((item, i) => (i < leftCol))
    }

    if(rightCol > 0) {
      childs = childs[0].filter((item, i) => (children.length - i-1) < rightCol)
    }

    return childs.map((item, i) => {

      return (
        <ColumnGroup key={i} height={(leftCol > 0 || rightCol > 0) ? 46*child.length+child.length-1 : ''}>
          {item}
        </ColumnGroup>
      )
    })
  }
  render() {
    const { col, width, minWidth } = this.props
    return (
      <div ref="tableHeader" className="table-header">
        <table data-ref="head" style={{minWidth}}>
          <Group {...this.props}/>

          <thead className="t-head">
          {this._renderHeader()}
          </thead>
        </table>
      </div>
    )
  }
}



class TableBody extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { list, allkey,  col, leftCol, rightCol, width, minWidth } = this.props
    return (
      <div className="table-body" ref="tableBody">
        <table data-ref="body" style={{minWidth}}>
          <Group {...this.props}/>
          <tbody className="t-body">
          {
            list.map((items, i) => {
              return (
                <ColumnGroup key={i}>
                  {allkey.map((item, j) => {

                    if(leftCol) {
                      if(j < leftCol) {
                        return (<td key={j}>John Brown</td>)
                      }else return
                    }

                    if(rightCol) {
                      if(allkey.length - j-1 < rightCol) {
                        return (<td key={j}>John Brown</td>)
                      }else return
                    }

                    return (<td key={j}>John Brown</td>)


                  })}
                </ColumnGroup>
              )
            })
          }
          </tbody>
        </table>
      </div>
    )
  }
}

class Table extends Component {
  constructor(props) {
    super(props);
    this.state={
      width: 0,
      style: 'table-position-left'
    }
    this.scroll = this.scroll.bind(this)
    this.bodyScroll = this.bodyScroll.bind(this)
  }

  static defaultProps = data

  render() {
    const { children, width } = this.props
    const childrens = _getRow(children)
    let child = _getLength(childrens)

    const col = ['100px', '100px', '100px', '100px', '100px', '100px', '100px', '100px', '100px', '100px', '100px']

    return (<div className={'table table-fixed-header '+ this.state.style} >
      <div className="table-content">

        <div className="table-scroll">
          <TableHeader ref="header" col={col} width={width + 'px'} minWidth={width + 'px'} child={child} {...this.props}/>
          <TableBody ref="body" allkey={childrens.key} col={col} width={width + 'px'} minWidth={width + 'px'} {...this.props}/>
        </div>

        {
          (this.state.width < width) && (
            <TableLeft ref="left" col={col} leftCol="1" {...this.props}/>
          )
        }
        {
          (this.state.width < width) && (
            <TableRight ref="right" col={col} rightCol="1" {...this.props}/>
          )
        }


      </div>
    </div>);
  }
  componentDidUpdate() {
    let { width } = this.state,
      _this = this,
      body = this.refs.body.refs.tableBody
      //leftT = this.refs.left.refs.tableLeft.refs.tableBody,
      //rightT = this.refs.right.refs.tableRight.refs.tableBody

  }
  componentWillMount() {

  }
  componentWillReceiveProps() {
    console.log(this)
  }



  bodyScroll() {
    const { children, width } = this.props
    let _this= this,
      header = this.refs.header.refs.tableHeader,
      body = this.refs.body.refs.tableBody
    let left = body.scrollLeft,
      right = left + body.offsetWidth,
      _width = body.scrollWidth

    /// 跟随滚动条联动
    header.scrollLeft = left

    if(_width <= width) {
      if(left === 0) {
        _this.setState({style: 'table-position-left'})
      }
      if(right >= width) {
        if(_this.state.style !== 'table-position-right') {
          _this.setState({style: 'table-position-right'})
        }
      }
      if(left !==0 && right < width){
        _this.setState({style: 'table-position-middle'})
      }
    } else {
      _this.setState({width: _width})
    }

  }
  scroll(e) {
    let body = this.refs.body.refs.tableBody,
      leftT = this.refs.left.refs.tableLeft.refs.tableBody,
      rightT = this.refs.right.refs.tableRight.refs.tableBody
    let top = e.target.scrollTop,
      arr = [body, leftT, rightT],
      i = 0

    for(i; i < arr.length; i++) {

      if(arr[i] == body) {
        this.bodyScroll()
      }

      if(arr[i] !== e.target) {
        arr[i].removeEventListener('scroll', scroll)
        /// 跟随滚动条联动
        arr[i].scrollTop = top
      }
    }
  }



  renderAgain() {
    let _this= this,
      body = this.refs.body.refs.tableBody,
      leftT = this.refs.left.refs.tableLeft.refs.tableBody,
      rightT = this.refs.right.refs.tableRight.refs.tableBody


    body.addEventListener('mouseover', function() {
      body.addEventListener('scroll', _this.scroll, false);
    })
    body.addEventListener('mouseout', function() {
      body.removeEventListener('scroll', _this.scroll);
    })

    leftT.addEventListener('mouseover', function() {
      leftT.addEventListener('scroll', _this.scroll, false);
    })
    leftT.addEventListener('mouseout', function() {
      leftT.removeEventListener('scroll', _this.scroll);
    })

    rightT.addEventListener('mouseover', function() {
      rightT.addEventListener('scroll', _this.scroll, false);
    })
    rightT.addEventListener('mouseout', function() {
      rightT.removeEventListener('scroll', _this.scroll);
    })
  }

  // 添加click事件
  componentDidMount() {
    let _this= this

    // 初始化
    this.bodyScroll()
    this.renderAgain()

    // 当屏幕大小改变时
    window.addEventListener('resize', function() {
      _this.setState({width: window.innerWidth})
      _this.renderAgain()
    }, false);
  }

}



class TableList extends Component {
  render() {
    return (
      <Table rootclassName="inline" width="1100" {...data}>
        <Column context="a1" dataIndex="a1" key="a1"/>
        <ColumnGroup context="a0">
          <Column context="b1" dataIndex="b1" key="b1"/>
          <ColumnGroup context="b2">
            <Column context="c1" dataIndex="c1" key="c1"/>
            <ColumnGroup context="b2">
              <Column context="c1" dataIndex="c1" key="c1"/>
              <Column context="c2" dataIndex="c2" key="c2"/>
            </ColumnGroup>
            <Column context="c2" dataIndex="c2" key="c3"/>
          </ColumnGroup>
          <ColumnGroup context="b2">
            <Column context="c1" dataIndex="c1" key="c4"/>
            <ColumnGroup context="b2">
              <Column context="c1" dataIndex="c1" key="c5"/>
            </ColumnGroup>
          </ColumnGroup>
        </ColumnGroup>
        <Column context="a2" dataIndex="a2" key="a2"/>
        <Column context="a3" dataIndex="a3" key="a3"/>
        <Column context="a4" dataIndex="a4" key="a4"/>
        {/*<TableLeft/>*/}
      </Table>
    )
  }
}
/*
* Array.prototype.max = function() {
 return Math.max.apply({},this)
 }
 Array.prototype.min = function() {
 return Math.min.apply({},this)
 }*/

// http://10.0.0.35:804/Quality/GetUserGroupInfoByid?token=523B516F4843EBFF0DF295611FE8F5D9BABE9CD0490E197782CCC560D2D1E42C&UserId=NANYP

render(<TableList/>,
  document.getElementById('table'));
const token = '523B516F4843EBFF0DF295611FE8F5D9BABE9CD0490E197782CCC560D2D1E42C'
kn.fetch({url: 'http://10.0.0.35:804/Documents/GetAllUserInfo',token})
  .then(res => {



  })

