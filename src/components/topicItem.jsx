import React from 'react'
import {Link} from 'react-router'
import '../assets/css/list.css'


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
    let topicCat
    if (this.props.item.top) {
      topicCat = <span className="put-top">置顶</span>
    } else if (this.props.item.tab === 'job') {
      topicCat = <span className="topic-tab">招聘</span>
    } else if (this.props.item.tab === 'share') {
      topicCat = <span className="topic-tab">分享</span>
    } else if (this.props.item.tab === 'ask') {
      topicCat = <span className="topic-tab">问答</span>
    }
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
          {topicCat}
          <Link className="topic-title" to={`/topic/${this.props.item.id}`} title={this.props.item.title}>{this.props.item.title}</Link>
        </div>
        <a className="last-time pull-r">
          <span className="last-active-time">{this.fromNow(new Date(this.props.item.last_reply_at).getTime())}</span>
        </a>
      </div>
    )
  }
}
