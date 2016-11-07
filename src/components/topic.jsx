import React from 'react'
import TopicItem from './topicItem.jsx'
import Header from './header.jsx'

export default class Topic extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      tab: 'all',
      sidebarOpen: false
    }
  }
  getPopularList() {
    $.ajax({
      url: '/api/v1/topics',
      data: {page: 1, tab: 'all', limit: 20},
      dataType: 'json',
      success: (data) => {
        this.setState({
          items: data.data
        })
      }
    })
  }
  componentWillMount() {
    this.getPopularList()
  }
  render() {
    const topicItem = this.state.items.map((item, index) => {
      return (
        <TopicItem item={item} key={index} />
        )
    })
    return (
      <div className="main">
        <Header title={'全部'} open={this.state.sidebarOpen} />
        <div className="topic-list">
          {topicItem}
        </div>
      </div>
    )
  }
}
