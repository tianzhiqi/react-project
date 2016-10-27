import React from 'react'
import {Link} from 'react-router'
import '../assets/css/detail.css'

export default class Reply extends React.Component {
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
      <div className="reply-item">
        <div className="author-content">
          <Link className="user-avatar" to={`/user/${this.props.item.author.loginname}`}>
            <img src={this.props.item.author.avatar_url} title={this.props.item.author.loginname} />
          </Link>
          <div className="user-info">
            <a className="dark reply-author">{this.props.item.author.loginname}</a>&nbsp;
            <a className="reply-time">{parseInt(this.props.floor, 10) + 1}楼{this.fromNow(new Date(this.props.item.create_at).getTime())}</a>
          </div>
        </div>
        <div className="reply-content" dangerouslySetInnerHTML={{__html: this.props.item.content}} />
      </div>
    )
  }
}
