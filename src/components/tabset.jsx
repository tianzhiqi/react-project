import React from 'react'
import '../assets/css/tab.css'

export default class TabSet extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeKey: ''
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
  getActiveKey() {
    const props = this.props
    let activeKey
    if ('activeKey' in props) {
      activeKey = props.activeKey
    } else if ('defaultActiveKey' in props) {
      activeKey = props.defaultActiveKey
    } else {
      activeKey = this.getDefaultActiveKey(props)
    }
    this.setState({
      activeKey
    })
  }
  componentDidMount() {
    this.getActiveKey()
  }
  onTabClick(activeKey) {
    this.setActiveKey(activeKey)
  }
  setActiveKey(activeKey) {
    if (this.state.activeKey !== activeKey) {
      this.setState({
        activeKey
      })
    }
  }
  getTabs() {
    const props = this.props
    const children = props.children
    const activeKey = this.state.activeKey
    const rst = []
    React.Children.forEach(children, (child) => {
      if (!child) {
        return
      }
      const key = child.key
      let events = {}
      events = {
        onClick: this.onTabClick.bind(this, key)
      }
      let cls = activeKey === key ? 'tab-active' : ''
      rst.push(<div role="tab" key={key} {...events} className={cls}>
        {child.props.tab}
      </div>)
    })
    return rst
  }
  getTabConent() {
    const props = this.props
    const children = props.children
    const activeKey = this.state.activeKey
    const newChildren = []
    React.Children.forEach(children, (child) => {
      if (!child) {
        return
      }
      const key = child.key
      const active = activeKey === key
      newChildren.push(React.cloneElement(child, {
        active
      }))
    })
    return newChildren
  }
  render() {
    return (
      <div className="tabs-list">
        <div role="tablist" className="tab-title">
          {this.getTabs()}
        </div>
        <div className="tab-content">
          {this.getTabConent()}
        </div>
      </div>
    )
  }
}
