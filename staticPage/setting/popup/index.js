
import React, { Component } from 'react'
import { render } from 'react-dom'
import _ from 'lodash'
import { typeOf } from '../../../assets/func'
import '../../style/main.less'
import './style.less'
let id = 0;








class PopupView extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  _createBody(type) {
    const { body, children } = this.props
    if(body) {
      if(type === 'alert') {
        return (
          <p className="popup-context">
            {body.context}
          </p>
        )
      }
    } else {
      return children
    }
  }

  _createHeader(option) {
    let title = option.title || '标题'
    if(option) {
      return (
        <div className="popup-header">
          <div className="popup-title">
            <h2>{title}</h2>
          </div>
          <div className="popup-close">
            <i className="fa fa-close"></i>
          </div>
        </div>
      )
    }
  }


  _createButton(option) {
    const btn = []
    if(option) {
      if(option.cancel) {
        btn.push(<button key="cancel" className="btn btn-default"
                         onClick={() => option.onClick('cancel')}>
          {typeOf(option.cancel, 'string') ? option.cancel : '取消'}
        </button>)
      }
      if(option.sure) {
        btn.push(<button key="sure" className="btn btn-primary"
                         onClick={() => option.onClick('sure')}>
          {typeOf(option.sure, 'string') ? option.sure : '确定'}

        </button>)
      }
      if(option.custom) {
        if(typeOf(option.custom, 'string')) {
          btn.push(<button key="custom"
                           className="btn btn-primary"
                           onClick={() => option.onClick(option.custom)}>
            {option.custom}
          </button>)
        }
        if(typeOf(option.custom, 'array')) {
          option.custom.map((item, i) => {
            btn.push(<button key={i}
                             className="btn btn-primary"
                             onClick={() => option.onClick(item)}>
              {item}
            </button>)
          })
        }

      }





      return (
        <div className="popup-btn">
          {btn}
        </div>
      )
    }
  }

  _createRootClass(type, size) {
    let className = 'popup'
    if(type === 'alert') {
      className += ' popup-alert'
    }

    if(size === 'sm') {
      className += ' popup-sm'
    }

    return className
  }
  render() {
    const { type, size, header, btn } = this.props


    return (
      <div className={this._createRootClass(type, size)}>
        <div className="popup-container">
          <div className="popup-content">
            {this._createHeader(header)}
            <div className="popup-body">
              {this._createBody(type)}
            </div>
            {this._createButton(btn)}
          </div>
        </div>

        <div className="popup-mask"></div>
      </div>
    )
  }
}
class MyComponent extends Component {
  render() {
    const popup = {
      type: 'alert',
      size: 'sm',
      header: {
        title: '标题',
      },
      btn: {
        sure: true,
        cancel: true,
        custom: '怎么回事',
        onClick(type) {
          console.log(type)
        }
      }/*,
      body: {
        context: '这里是提示信息',
      }*/
    }

    return (
      <div className="layout layout-content-scroll">
        <header className="layout-header flex"></header>
        <article className="layout-content">
          <div className="layout-aside">
            <div className="height-400">2</div>
            <div className="height-400">2</div>
            <div className="height-400">2</div>
          </div>
          <div className="layout-subject">
            <div className="height-40"></div>
            <div className="row">
              <div className="width-100"></div>
              <div>
                <PopupView {...popup}><div className="abdc">fdsafdsafa</div></PopupView>
              </div>
            </div>
          </div>
        </article>
        <footer className="layout-footer"></footer>
      </div>
    )
  }
}

const data = {
  defaultCurrent: 1,
  total: 50,
  size: 'small',
  showSizeChanger: true, // 可以选择跳转到那一页
  showQuickJumper : true, //可以快速跳转
  simple  : true, // 简介形

  current: 1,
  onChange:(page) => {},

  showTotal: 'fdsafdsa', // 展示文字

  itemRender: (current, type, originalElement) => {}
}



render(<MyComponent  />, document.getElementById('root'));