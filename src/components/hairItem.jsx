import React from 'react'
import '../assets/css/hair.css'

const hairSrc = require('../assets/img/one-px.jpg')

export default class HairItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imageDomain: 'http://meimeidou.qiniudn.com/'
    }
  }
  render() {
    return (
      <div className="hair-item">
        <a>
          <img src={hairSrc} />
          <div className="lazy-img" style={{backgroundImage: 'url('+this.state.imageDomain+this.props.item.coverImg+')'}} />
        </a>
        <div className="hair-name">
          <span>{this.props.item.albumName}</span>
          <div className="hair-like">0</div>
        </div>
      </div>
    )
  }
}
