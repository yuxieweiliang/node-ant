
import React, { Component } from 'react'
import { render } from 'react-dom'
import _ from 'lodash'
import { typeOf } from '../../../assets/func'
import '../../style/main.less'
import './style.less'
let id = 0;








class PagingView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      defaults: [2, 3, 4, 5, 6],
      page: 1
    }
  }

  _setPage(page) {
    const { defaultCurrent, total, showSizeChanger } = this.props
    let move = 2
    let defaults = []

    console.log(total - page)

    if(page > 3 && page < total -2) {
      console.log(total - page)

      for(let i = -move; i < 3; i++ ) {
        defaults.push(page + i)
      }

    } else if(page === 3 || page === total -2){

      for(let i = -1; i < 3; i++ ) {
        defaults.push(page + i)
      }
    } else {
      defaults = this.state.defaults
    }

    this.setState({
      page,
      defaults
    })
  }

  _createPageItems() {
    const { defaultCurrent, total, showSizeChanger } = this.props
    const { page, defaults } = this.state

    return defaults.map((item, i) => {
      let className = 'paging-item'
      if(page === item) {
        className += ' paging-active'
      }
      return (
        <li key={i}
            className={className}
            onClick={() => this._setPage(item)}>
          <a>{item}</a>
        </li>
      )
    })

  }
  _changePage(size) {
    const { total } = this.props
    const { defaults, page } = this.state

    if(page + size < 1 || page + size > total-3) {
      return
    }

    console.log(page + size)


    this._setPage(page + size)
  }
  _MoveToPage(size) {
    const { defaults } = this.state
    const page = defaults.map(item => item + size)
    this.setState({
      defaults: page
    })
  }
  render() {
    const { total } = this.props
    const pages = this._createPageItems(total)
    let prevClass = 'paging-item'
    let nextClass = 'paging-item'
    if(this.state.page === 1) {
      prevClass += ' paging-active'
    }
    if(this.state.page === total) {
      nextClass += ' paging-active'
    }

    return (
      <ul className="paging">
        <li className="paging-prev" onClick={() => this._changePage(-1)}>
          <a className="paging-item-link">＜</a>
        </li>
        <li className={prevClass} onClick={() => this._setPage( 1)}>
          <a>1</a>
        </li>
        <li className="paging-jump-prev" onClick={() => this._changePage(-1)}>
          <a></a>
        </li>
        {
          pages && pages
        }
        <li className="paging-jump-next" onClick={() => this._changePage(1)}>
          <a></a>
        </li>
        <li className={nextClass} onClick={() => this._setPage(total)}>
          <a>{total}</a>
        </li>
        <li className="paging-next" onClick={() => this._changePage(1)}>
          <a className="paging-item-link">＞</a>
        </li>
      </ul>
    )
  }
}
class MyComponent extends Component {
  constructor() {
    super();
    this.state = {
      oldNode: null,
    }
  }
  // 添加click事件
  componentDidMount() {
    document.addEventListener('click', this._hideDropDown, false);
  }

  /**
   * 渲染组建
   * @returns {*}
   */
  render() {
    const paging1 = {
      defaultCurrent: 1,
      total: 20
    }
    const paging2 = {
      defaultCurrent: 1,
      total: 20,
      showSizeChanger: true,
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
                <PagingView {...paging1}/>
              </div>
            </div>
            <div className="height-40"></div>
            <div className="row">
              <div className="width-100"></div>
              <div>
                <PagingView {...paging2}/>
              </div>
            </div>
          </div>
        </article>
        <footer className="layout-footer"></footer>
      </div>
    )
  }
  /**
   * 组建卸载时，将chick事件清除
   */
  componentWillUnmount() {
    document.removeEventListener('click', this._hideDropDown);
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