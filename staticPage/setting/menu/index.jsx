import React, { Component } from 'react'
import { render } from 'react-dom'
import data from './data'
import _ from 'lodash'
import { typeOf } from '../../../assets/func'
import '../../style/main.less'
import './style.less'

class MyComponent extends Component {
  constructor() {
    super();
    this.state = {
      active: 0,
    }
  }
  static defaultProps = data

  _renderSub(subList) {
    let array = []
    subList.subset.map((list, i) => {

      // 如果只有一段
      if(typeOf(list) === 'object') {

        array.push(<li key={i}>{list.title}</li>)

        // 如果分多段
      } else if(typeOf(list) === 'array') {
        if(i !== 0) {
          array.push(<li key={i + 'divider'} className="divider"/>)
        }

        list.map((item, j) => {
          array.push(<li key={j + '-' + i}>{item.title}</li>)
        })

      } else {
        console.error('data in wrong format')
      }
    })
    return array
  }

  _navClick(i) {
    this.setState({active: i})
  }

  _navClass(item, i) {
    let className = 'menu-item '
    if(this.state.active === i) {
      className +='active'
    } else if(item.disabled) {
      className +='disabled'
    }
    return  className
  }
  render() {
    return (<div className={'menu-root menu-' + this.props.class}>
      <span className="menu-prev"></span>
      <div className="menu-nav">
        {
          this.props.list.map((item, i) => {
            return (
              <div
                key={i}
                className={this._navClass(item, i)}
                onClick={() => this._navClick(i)}>
                <div className="menu-title">
                  <a href="javascript:void(0)">
                    <i className={'fa fa-' + item.icon}/>
                    {item.title}
                  </a>
                </div>
                <ul key={i} className="menu-hidden menu-drop">
                  {
                    this._renderSub(item)
                  }
                </ul>

              </div>
            )
          })
        }

        <div className="menu-item">
          <div className="menu-title">
            <a href="javascript:void(0)">
              <i className="fa fa-address-book"></i>
              Navigation Two
            </a>
          </div>
          <ul className="menu-hidden menu-drop">
            <li>fdsfdsa</li>
            <li>fdsfdsa</li>

            <li>fdsafdafdsaf</li>
            <li>fdsafdafdsaf</li>
            <li className="divider"></li>
            <li>fdsafdafdsaf</li>
            <li>fdsafdafdsaf</li>
            <li>fdsfdsa</li>
          </ul>
        </div>
        <div className="menu-item disabled">
          <div className="menu-title">
            <a href="javascript:void(0)">
              <i className="fa fa-address-book"></i>
              Navigation Three
            </a>
          </div>
        </div>
        <div className="menu-item">
          <div className="menu-title">
            <a href="javascript:void(0)">
              <i className="fa fa-address-book"></i>
              Navigation Four
            </a>
          </div>
          <dl className="menu-hidden menu-drop">
            <dt>fdsa</dt>
            <dd>fdsa</dd>
            <dd>fdsa</dd>
            <dt>fdsa</dt>
            <dd>fdsa</dd>
            <dd>fdsa</dd>
          </dl>
        </div>
      </div>
      <span className="menu-next"></span>
    </div>);
  }
}


render(<MyComponent />, document.getElementById('root'));
