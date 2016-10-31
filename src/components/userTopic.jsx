import React from 'react'
import {Link} from 'react-router'

export default class UserTopic extends React.Component {
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
      <div className="user-recent">
        <Link className="recent-topic" to={`/topic/${this.props.item.id}`} title={this.props.item.title}>{this.props.item.title}</Link>
          <a className="last-time pull-r">
            <span className="last-active-time">{this.fromNow(new Date(this.props.item.last_reply_at).getTime())}</span>
          </a>
      </div>
    )
  }
}
