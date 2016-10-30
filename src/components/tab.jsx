import React from 'react'

export default class Tab extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div role="tabpanel">
        {this.props.children}
      </div>
    )
  }
}
