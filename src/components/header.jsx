import React from 'react'
import '../assets/css/header.scss'

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="site-nav">
          <button>
            <span className="btn-bar" />
            <span className="btn-bar" />
            <span className="btn-bar" />
          </button>
          <span className="current-title">{this.props.title}</span>
        </div>
      </header>
    )
  }
}
