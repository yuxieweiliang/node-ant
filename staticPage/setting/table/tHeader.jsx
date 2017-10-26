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