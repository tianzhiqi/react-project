import React from 'react'
import TopicItem from './topicItem.jsx'
import Header from './header.jsx'

export default class Topic extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      searchParams: {
        tab: 'all',
        page: 1,
        limit: 20
      },
      sidebarOpen: false
    }
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this)
  }
  getPopularList() {
    $.ajax({
      url: '/api/v1/topics',
      data: this.state.searchParams,
      dataType: 'json',
      success: (data) => {
        this.setState({
          items: data.data
        })
      }
    })
  }
  onSetSidebarOpen(open) {
    this.setState({
      sidebarOpen: open
    })
  }
  componentWillMount() {
    if (this.props.location.query && this.props.location.query.tab) {
      this.setState({
        tab: this.props.location.query.tab
      })
    }
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
        <Header title={'全部'} open={this.state.sidebarOpen} onSetOpen={this.onSetSidebarOpen} />
        <div className="topic-list">
          {topicItem}
        </div>
      </div>
    )
  }
}
