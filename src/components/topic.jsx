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
  getHeaderTitle(tab) {
    let str = ''
    switch (tab) {
      case 'share':
        str = '分享'
        break
      case 'ask':
        str = '问答'
        break
      case 'job':
        str = '招聘'
        break
      case 'good':
        str = '精华'
        break
      default:
        str = '全部'
        break
    }
    return str
  }
  componentWillMount() {
    if (this.props.location.query && this.props.location.query.tab) {
      const newState = {...this.state}
      newState.searchParams.tab = this.props.location.query.tab
      this.setState(newState)
    }
    this.getPopularList()
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.location.query.tab !== nextProps.location.query.tab) {
      const newState = {...this.state}
      newState.searchParams.tab = nextProps.location.query.tab
      newState.sidebarOpen = false
      this.setState(newState)
      this.getPopularList()
    }
  }
  render() {
    const topicItem = this.state.items.map((item, index) => {
      return (
        <TopicItem item={item} key={index} />
        )
    })
    return (
      <div className="main">
        <Header title={this.getHeaderTitle(this.state.searchParams.tab)} open={this.state.sidebarOpen} onSetOpen={this.onSetSidebarOpen} />
        <div className="topic-list">
          {topicItem}
        </div>
      </div>
    )
  }
}
