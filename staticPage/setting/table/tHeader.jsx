import React, { Component } from 'react'
import { render } from 'react-dom'
import data from './data'
import _ from 'lodash'
import kn from '../../../assets/server'
import { typeOf } from '../../../assets/func'
import '../../style/main.less'
import warning from 'warning'
import { Group } from './group.jsx'
import { ColumnGroup } from './columnGroup.jsx'
import { Column } from './column.jsx'


export class THeader extends Component {
  constructor(props) {
    super(props);
  }

  _createFilter(column) {
    const { filter } = this.props

    if(column.filters) {
      // console.log(column.filters) <span key={i}>{items.text}</span>
      return (
        <span className="table-column-sorter">
          <abbr className="fa fa-filter" title="" onClick={() => filter.order()}/>
            <ul className="dropdown-menu">
              {
                column.filters.map((items, i) => {
                  return (
                    <li key={i}><a href="javascript:void(0)">{items.text}</a></li>
                  )
                })
              }
            </ul>
        </span>
      )
    }

  }

  /**
   * 排序 ascend：正序，descend：反序
   * @param column
   * @param order
   * @private
   */
  _sorter(column, order) {
    const { sort } = this.props

    if(order === 'ascend') {

      // 点击上箭头，排列正序
      sort.order((prev, next) => column.sorter(prev, next), order, column.key)
    } else if(order === 'descend') {

      // 点击下箭头，排列反序
      sort.order((prev, next) => -column.sorter(prev, next), order, column.key)
    } else {
      // 当 order === false 的时候， 或 order === true 的时候
    }
  }
  /**
   * 可选参数 'ascend' 'descend' false
   * @param column
   * @returns {XML}
   * @private
   */
  _createSorter(column) {
    const { sort,  } = this.props
    let sortOrder = null

    if(column.sortOrder) {
      sortOrder = column.sortOrder
    }
    // console.log(sort)
    if(column.sorter) {

      return (
        <span className="table-column-sorter">
          <abbr className="caret-up fa fa-caret-up" title="" onClick={() => this._sorter(column, 'ascend')}/>
          <abbr className="caret-down fa fa-caret-down active" title="" onClick={() => this._sorter(column, 'descend')}/>
        </span>
      )
    }
  }

  _createTd(column, j, rowSpan) {
    const { dataSource, style,  } = this.props
    const filters = this._createFilter(column)
    const sorter = this._createSorter(column)

    // 如果有child，则清空rowSpan
    if(column.children) {
      rowSpan = ''
    }







    // console.log(column)
    return (
      <th key={'_' + j}
          colSpan={column.col}
          rowSpan={rowSpan}
      >
        <div className="table-title-inner">

          {column.title}

          {sorter}
          {filters}
        </div>
        </th>
    )
  }

  render() {
    const { dataSource, style, keys } = this.props
    const length = dataSource.length
    return (
      <div ref="tableHeader" className="table-header">
        <table data-ref="head" style={style}>
          <Group keys={keys}/>

          <thead className="t-head">
          {
            dataSource.map((row, i) => {
              return (<tr key={i}>
                {
                  row.map((column, j) => this._createTd(column, j, length -i))
                }
              </tr>)

            })
          }
          </thead>
        </table>
      </div>
    )
  }
}