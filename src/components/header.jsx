import React from 'react'
import '../assets/css/header.scss'
import back from '../assets/img/Koala.jpg'
import defaultAvatar from '../assets/img/center-avatar.png'

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
                <img src={back} />
              </div>
              <a className="side-user-avatar"><img src={defaultAvatar} /></a>
              <a className="side-user-name">David</a>
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
