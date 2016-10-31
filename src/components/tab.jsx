import React from 'react'

export default class Tab extends React.Component {
  render() {
    const props = this.props
    const cls = props.active === true ? 'tab-content-active' : ''
    return (
      <div role="tabpanel" className={cls}>
        {this.props.children}
      </div>
    )
  }
}
