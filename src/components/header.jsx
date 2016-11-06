import React from 'react'
import '../assets/css/header.scss'

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="site-nav">
          <button>
            <span className="btn-bar" />
            <span className="btn-bar" />
            <span className="btn-bar" />
          </button>
          <span className="current-title">{this.props.title}</span>
        </div>
        <div className="side-nav">
          <div>
            <div className="user-view">
              <div className="user-background">
                <img src="../assets/img/avatar.png" />
              </div>
              <a><img src="../assets/img/center-avatar.png" /></a>
              <a>David</a>
            </div>
            <div className="side-nav-list">
              <a>全部</a>
              <a>精华</a>
              <a>问答</a>
              <a>分享</a>
              <a>招聘</a>
            </div>
          </div>
        </div>
        <div className="overlay" />
      </header>
    )
  }
}
