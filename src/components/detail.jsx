import React from 'react'

export default class Detail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      detail: null
    }
  }
  getDetail() {
    $.ajax({
      url: '/api/v1/topics/' + this.props.children,
      dataType: 'json',
      success: (data) => {
        this.setState({
          detail: data.data
        })
      }
    })
  }
  componentDidMount() {
    this.getDetail()
  }
  render() {
    return (
      <div className="topic-detail">
        {this.state.detail}
      </div>
    )
  }
}
