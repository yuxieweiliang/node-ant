import React, { Component } from 'react'
import { render } from 'react-dom'
import data from './data'
import _ from 'lodash'
import kn from '../../../assets/server'
import { typeOf } from '../../../assets/func'
import '../../style/main.less'
import warning from 'warning'
import { TableScroll } from './tableScroll'
import { TableLeft } from './tableLeft'
import { TableRight } from './tableRight'
import { THeader } from './tHeader'
import { TBody } from './tBody'
import { Group } from './group.jsx'
import { ColumnGroup } from './columnGroup.jsx'
import { Column } from './column.jsx'
import { menuId, _getData, _getRow, _getLength, flatFilter, normalizeColumns, treeMap } from './func'







class Table extends Component {
  constructor(props) {
    super(props);
    this.scroll = this.scroll.bind(this)
    this.bodyScroll = this.bodyScroll.bind(this)
  }
  state = {
    width: 0,
    style: 'table-position-left',
    header: {},
    body: {}
  }
  // static defaultProps = data

  componentWillMount() {
    console.log()
  }



  render() {
    const { rootClass, width, dataSource, columns, children } = this.props
    const columnArray = columns || normalizeColumns(children)
    // const childrens = _getRow(children)
    // let child = _getLength(childrens)
    const tree = treeMap(columnArray, function(node, index) {
      return {
        ...node,
        search: <div key="1">fdsaf</div>
      }
    })

    // console.log(_getLength(tree))









    function reduceArr(arrayTree) {
      let _arr = []

      _arr.push(arrayTree)

      const reduc = (arr) => {

        const thisArr = arr.reduce((prev, next) => {

          if(next.children && next.children.length > 0) {
            prev = prev.concat(next.children)
          }
          return prev
        }, [])

        if(thisArr.length > 0) {
         _arr = _arr.concat([thisArr])
         }
      }

      function func(i) {
        reduc(_arr[i])

        i++

        if(_arr[i] && _arr[i].length > 0) {
          func(i)
        }
      }

      func(0)
      return _arr
    }


    console.log(reduceArr(tree))












    return (<div className={'table table-fixed-header '+ this.state.style} >
      <div className="table-content">

        <div className="table-scroll">

          {/*<THeader ref="header"
                       width={width + 'px'}
                       minWidth={width + 'px'}
                       child={child}
                       {...this.props}/>
           <TBody {...this.props}/>
          */}




        </div>



{/*

        {
          (this.state.width < width) && (
            <TableLeft ref="left"
                       leftCol="1"
                       {...this.state}
                       {...this.props}/>
          )
        }



        {
          (this.state.width < width) && (
            <TableRight ref="right"
                        rightCol="1"
                        {...this.state}
                        {...this.props}/>
          )
        }
*/}


      </div>
    </div>);
  }
  /*componentDidUpdate() {
    let { width } = this.state,
      _this = this,
      header = this.refs.header.refs.tableHeader,
      body = this.refs.body.refs.tableBody
      //leftT = this.refs.left.refs.tableLeft.refs.tableBody,
      //rightT = this.refs.right.refs.tableRight.refs.tableBody
    if(!this.state.body.height) {

      this.setState({
        header: {
          height: header.offsetHeight,
          width: header.offsetWidth,
          listH: header.querySelector('tr').offsetHeight,
          listW: header.querySelector('tr').offsetWidth,
        },
        body: {
          height: body.offsetHeight,
          width: body.offsetWidth,
          listH: body.querySelector('tr').offsetHeight,
          listW: body.querySelector('tr').offsetWidth,
        }
      })
    }

  }*/
  componentWillReceiveProps() {}

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


      leftT = this.refs.left.refs.tableLeft.refs.tableBody || null,
      rightT = this.refs.right.refs.tableRight.refs.tableBody || null


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
    // this.bodyScroll()


    if(this.props.width > window.innerWidth) {
      //this.renderAgain()
    }

    // 当屏幕大小改变时
    window.addEventListener('resize', function() {
      _this.setState({width: window.innerWidth})
      if(_this.props.width > window.innerWidth) {
        // _this.renderAgain()
      }
    }, false);
  }

}

class TableList extends Component {
  render() {
    return (
      <Table {...this.props} col={['100px', '100px', '100px', '100px', '100px', '100px', '100px', '100px', '100px', '100px', '100px']}>
        <Column context="a1" dataIndex="a1" key="a1" fixed="left"/>
        <ColumnGroup context="a0">
          <Column context="b1" dataIndex="b1" key="b1"/>
          <Column context="c1" dataIndex="c1" key="c1"/>
          <Column context="c1" dataIndex="c1" key="c2"/>
          <Column context="c2" dataIndex="c2" key="c3"/>
          <Column context="c2" dataIndex="c2" key="c4"/>
          <Column context="c1" dataIndex="c1" key="c5"/>
          <Column context="c1" dataIndex="c1" key="c6"/>
        </ColumnGroup>
        <Column context="a2" dataIndex="a2" key="a2"/>
        <Column context="a3" dataIndex="a3" key="a3"/>
        <Column context="a4" dataIndex="a4" key="a4"  fixed="right"/>
        {/*<TableLeft/>*/}
      </Table>
    )
  }
}

const datas = {
  ...data,
  dataSource: data.dataSource.map(item => ({
    ...item,
    a4: <button className="btn-primary btn-sm" onClick={() => console.log(item)}>aaaa</button>
  }))
}


render(<TableList {...datas} />, document.getElementById('table'));










/*class TableList extends Component {
  render() {
    return (
      <Table  {...this.props}>
        <Column context="a1" dataIndex="a1" key="a1" fixed="left"/>
        <ColumnGroup context="a0">
          <Column context="b1" dataIndex="b1" key="b1"/>
          <Column context="c1" dataIndex="c1" key="c1"/>
          <Column context="c1" dataIndex="c1" key="c2"/>
          <Column context="c2" dataIndex="c2" key="c3"/>
          <Column context="c2" dataIndex="c2" key="c4"/>
          <Column context="c1" dataIndex="c1" key="c5"/>
          <Column context="c1" dataIndex="c1" key="c6"/>
        </ColumnGroup>
        <Column context="a2" dataIndex="a2" key="a2"/>
        <Column context="a3" dataIndex="a3" key="a3"/>
        <Column context="a4" dataIndex="a4" key="a4"  fixed="right"/>
        {/!*<TableLeft/>*!/}
      </Table>
    )
  }
}*/




/*
*/

/*
* Array.prototype.max = function() {
 return Math.max.apply({},this)
 }
 Array.prototype.min = function() {
 return Math.min.apply({},this)
 }*/






