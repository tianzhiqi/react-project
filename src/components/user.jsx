import React from 'react'
import '../assets/css/user.css'
import TabSet from './tabset.jsx'
import Tab from './tab.jsx'

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
        <div className="user-recent">
          <TabSet defaultActiveKey="1">
            <Tab tab="tab1" key="1">content</Tab>
            <Tab tab="tab2" key="2">content1</Tab>
          </TabSet>
        </div>
      </div>
    )
  }
}
