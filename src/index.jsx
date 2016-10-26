import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import Topic from './components/topic.jsx'
import Detail from './components/detail.jsx'

ReactDOM.render(
<Router history={hashHistory}>
  <Route path="/" component={Topic} />
  <Route path="/topic/:topicId" component={Detail} />
</Router>, document.getElementById('container'))
