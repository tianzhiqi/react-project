import React from 'react'
import '../assets/css/header.scss'

export default class Header extends React.Component {
  render() {
    return (
      <header className="clearfix">
        <div className="site-nav pull-l">
          <button>
            <span className="btn-bar" />
            <span className="btn-bar" />
            <span className="btn-bar" />
          </button>
        </div>
        <span className="pull-r">
          <a>登录</a>
          <a>注册</a>
        </span>
      </header>
    )
  }
}
