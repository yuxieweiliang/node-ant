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

export class TBody extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const { dataSource, allkey, width, minWidth } = this.props

    // console.log(this)

    return (
      <div className="table-body" ref="tableBody">
        <table data-ref="body" style={{width}}>
          <Group {...this.props}/>
          <tbody className="t-body">
          {
            dataSource.map((items, i) => {
              return (
                <ColumnGroup key={i}>
                  {allkey.map((key, j) => {

                    return (<td  key={j}>{items[key]}</td>)

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