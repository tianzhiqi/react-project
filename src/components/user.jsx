import React from 'react'
import '../assets/css/user.css'
import TabSet from './tabset.jsx'
import Tab from './tab.jsx'
import UserTopic from './userTopic.jsx'

export default class User extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: ''
    }
  }
  getUserDetail() {
    $.ajax({
      url: '/api/v1/user/' + this.props.routeParams.loginname,
      dataType: 'json',
      success: (data) => {
        if (data.success === true) {
          this.setState({
            user: data.data
          })
        }
      }
    })
  }
  componentDidMount() {
    this.getUserDetail()
  }
  render() {
    const recentReplies = this.state.user && this.state.user.recent_replies.map((item, index) => {
      return (
        <UserTopic item={item} key={index} />
      )
    })
    const recentTopics = this.state.user && this.state.user.recent_topics.map((item, index) => {
      return (
        <UserTopic item={item} key={index} />
      )
    })
    return (
      <div className="user-container">
        <div className="user-header">
          <div className="user-pic">
            <img src={this.state.user.avatar_url} title={this.state.user.loginname} />
          </div>
          <p className="user-name">{this.state.user.loginname}</p>
          <div className="user-other-info clearfix">
            <span className="pull-l">注册时间: {this.state.user.create_at}</span>
            <span className="pull-r">积分: {this.state.user.score}</span>
          </div>
        </div>
        <div className="recent-changes">
          <TabSet defaultActiveKey="1">
            <Tab tab="最近创建的话题" key="1">{recentReplies}</Tab>
            <Tab tab="最近参与的话题" key="2">{recentTopics}</Tab>
          </TabSet>
        </div>
      </div>
    )
  }
}
