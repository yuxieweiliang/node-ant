import React, { Component } from 'react'
import { render } from 'react-dom'
import data from './data'
import _ from 'lodash'
import kn from '../../../assets/server'
import { typeOf } from '../../../assets/func'
import '../../style/main.less'
import warning from 'warning'

export class Group extends Component {
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