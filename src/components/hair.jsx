import React from 'react'
import HairItem from './hairItem.jsx'

export default class Hair extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      imageDomain: 'http://meimeidou.qiniudn.com/'
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
  componentDidMount() {
    this.getPopularList()
  }
  render() {
    const hairItem = this.state.items.map((item, index) => {
      return (
        <HairItem item={item} key={index} />
        )
    })
    return (
    <div className="hair-list">
      {hairItem}
    </div>
    )
  }
}
