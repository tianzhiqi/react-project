import React from 'react'
import 'github-markdown-css'
import '../assets/css/detail.css'
import Reply from './reply.jsx'

export default class Detail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      detail: ''
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
  getDetail() {
    $.ajax({
      url: '/api/v1/topic/' + this.props.routeParams.topicId,
      dataType: 'json',
      success: (data) => {
        if (data.success === true) {
          this.setState({
            detail: data.data
          })
        }
      }
    })
  }
  componentDidMount() {
    this.getDetail()
  }
  render() {
    const reply = this.state.detail && this.state.detail.replies.map((item, index) => {
      return (
        <Reply item={item} key={index} floor={index} />
      )
    })
    return (
      <div className="topic-content">
        <div className="topic-header">
          <span className="topic-full-title">{this.state.detail.title}</span>
          <div className="topic-changes">
            <span>发布于 {this.fromNow(new Date(this.state.detail.create_at).getTime())}</span>
            <span>作者 {this.state.detail.author && this.state.detail.author.loginname}</span>
            <span>{this.state.detail.visit_count} 次浏览</span>
            <span>最后一次编辑是 {this.fromNow(new Date(this.state.detail.last_reply_at).getTime())}</span>
          </div>
        </div>
        <div className="inner-topic">
          <div className="markdown-body" dangerouslySetInnerHTML={{__html: this.state.detail.content}} />
        </div>
        <div className="reply-list">
          <div className="reply-content-header">
            <span className="reply-total-num">{this.state.detail.reply_count} 回复</span>
          </div>
          {reply}
        </div>
      </div>
    )
  }
}
