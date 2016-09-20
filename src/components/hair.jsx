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
      url: '/api/hairstyle/popularList',
      dataType: 'json',
      success: (data) => {
        this.setState({
          items: data.result.result
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
