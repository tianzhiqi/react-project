import React from 'react'
import {Link} from 'react-router'
import '../assets/css/list.css'
import {getTabInfo} from '../js/utils.js'

export default class TopicItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  fromNow (time) {
    const between = (Date.now() - Number(time))/1000
    if (between < 3600) {
      return this.pluralize(~~(between/60), '分钟')
    } else if (between < 86400) {
      return this.pluralize(~~(between/3600), '小时')
    }
    return this.pluralize(~~(between/86400), '天')
  }
  pluralize (time, label) {
    return time + label + '前'
  }
  render() {
    return (
      <div className="topic-item">
        <Link className="user-avatar pull-l" to={`/user/${this.props.item.author.loginname}`}>
          <img src={this.props.item.author.avatar_url} title={this.props.item.author.loginname} />
        </Link>
        <span className="reply-count">
          <span className="count-of-reply" title="回复数">{this.props.item.reply_count}</span>
          <span className="count-split">/</span>
          <span className="count-of-click" title="点击数">{this.props.item.visit_count}</span>
        </span>
        <div className="topic-title-wrapper">
          <span className={getTabInfo(this.props.item.tab, this.props.item.good, this.props.item.top, true)}>{getTabInfo(this.props.item.tab, this.props.item.good, this.props.item.top, false)}</span>
          <Link className="topic-title" to={`/topic/${this.props.item.id}`} title={this.props.item.title}>{this.props.item.title}</Link>
        </div>
        <a className="last-time pull-r">
          <span className="last-active-time">{this.fromNow(new Date(this.props.item.last_reply_at).getTime())}</span>
        </a>
      </div>
    )
  }
}
