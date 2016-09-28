import React from 'react'
import '../assets/css/hair.css'


export default class HairItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imageDomain: 'http://meimeidou.qiniudn.com/'
    }
  }
  render() {
    return (
      <div className="topic-item">
        <a className="user-avatar pull-l">
          <img src={this.props.item.author.avatar_url} title={this.props.item.author.loginname} />
        </a>
        <span className="reply-count">
          <span className="count-of-reply" title="回复数">{this.props.item.reply_count}</span>
          <span className="count-split">/</span>
          <span className="count-of-click" title="点击数">{this.props.item.visit_count}</span>
        </span>
        <div className="topic-title-wrapper">
          <span className="put-top"></span>
          <a className="topic-title" title={this.props.item.title}>{this.props.item.title}</a>
        </div>
        <a className="last-time">
          <img></img>
        </a>
      </div>
    )
  }
}
