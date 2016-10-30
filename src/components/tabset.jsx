import React from 'react'

export default class TabSet extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      renderTab: []
    }
  }
  getDefaultActiveKey(props) {
    let activeKey
    React.Children.forEach(props.children, (child) => {
      if (child && !activeKey && !child.props.disabled) {
        activeKey = child.key
      }
    })
    return activeKey
  }
  onTabClick(activeKey) {
  }
  getTabs() {
    const props = this.props
    const children = props.children
    const activeKey = props.defaultActiveKey
    const rst = []
    React.Children.forEach(children, (child) => {
      if (!child) {
        return
      }
      const key = child.key

      rst.push(<div role="tab" key={key}>
        {child.props.tab}
      </div>)
    })
    return rst
  }
  getTabConent() {
    const props = this.props
    const children = props.children
    const activeKey = props.defaultActiveKey
    const newChildren = []
    React.Children.forEach(children, (child) => {
      if  (!child) {
        return
      }
      const key = child.key
      newChildren.push(React.cloneElement(child))
    })
    return newChildren
  }
  render() {
    return (
      <div>
        <div role="tablist">
          {this.getTabs()}
        </div>
        <div className="tab-content">
          {this.getTabConent()}
        </div>
      </div>
    )
  }
}
