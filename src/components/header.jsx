import React from 'react'
import {Link} from 'react-router'
import '../assets/css/header.scss'
import back from '../assets/img/Koala.jpg'
import defaultAvatar from '../assets/img/center-avatar.png'

export default class Header extends React.Component {
  constructor(props) {
    super(props)

    this.overlayClicked = this.overlayClicked.bind(this)
    this.menuClicked = this.menuClicked.bind(this)
    // this.onTouchStart = this.onTouchStart.bind(this)
    // this.onTouchMove = this.onTouchMove.bind(this)
    // this.onTouchEnd = this.onTouchEnd.bind(this)
    // this.onScroll = this.onScroll.bind(this)
  }
  // onTouchStart(ev) {
  //   if (!this.isTouching()) {
  //     const touch = ev.targetTouches[0]
  //     this.setState({
  //       touchIdentifier: touch.identifier,
  //       touchStartX: touch.clientX,
  //       touchStartY: touch.clientY,
  //       touchCurrentX: touch.clientX,
  //       touchCurrentY: touch.clientY
  //     })
  //   }
  // }
  // onTouchMove(ev) {
  //   if (this.isTouching()) {
  //     for (let ind = 0; ind < ev.targetTouches[0].length; ind++) {
  //       if (ev.targetTouches[ind].identifier === this.state.touchIdentifier) {
  //         this.setState({
  //           touchCurrentX: ev.targetTouches[ind].clientX,
  //           touchCurrentY: ev.targetTouches[ind].clientY
  //         })
  //         break
  //       }
  //     }
  //   }
  // }
  // onTouchEnd(ev) {
  //   if (this.isTouching()) {
  //
  //   }
  // }
  overlayClicked() {
    if (this.props.open) {
      this.props.onSetOpen(false)
    }
  }
  menuClicked() {
    if (!this.props.open) {
      this.props.onSetOpen(true)
    }
  }
  render() {
    const overlayStyle = {}
    const sidebarStyle = {}
    if (this.props.open) {
      overlayStyle.opacity = 1
      overlayStyle.visibility = 'visible'
      sidebarStyle.transform = 'translateX(0%)'
      sidebarStyle.WebkitTransform = 'translateX(0%)'
    }
    return (
      <header>
        <div className="site-nav" onClick={this.menuClicked}>
          <button>
            <span className="btn-bar" />
            <span className="btn-bar" />
            <span className="btn-bar" />
          </button>
          <span className="current-title">{this.props.title}</span>
        </div>
        <div className="side-nav" style={sidebarStyle}>
          <div>
            <div className="user-view">
              <div className="user-background">
                <img src={back} />
              </div>
              <a className="side-user-avatar"><img src={defaultAvatar} /></a>
              <a className="side-user-name">David</a>
            </div>
            <div className="side-nav-list">
              <Link to={{pathname: '/', query: {tab: 'all'}}}>全部</Link>
              <Link to={{pathname: '/', query: {tab: 'good'}}}>精华</Link>
              <Link to={{pathname: '/', query: {tab: 'ask'}}}>问答</Link>
              <Link to={{pathname: '/', query: {tab: 'share'}}}>分享</Link>
              <Link to={{pathname: '/', query: {tab: 'job'}}}>招聘</Link>
            </div>
          </div>
        </div>
        <div className="overlay" onClick={this.overlayClicked} style={overlayStyle} />
      </header>
    )
  }
}
