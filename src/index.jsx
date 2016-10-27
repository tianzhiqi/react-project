import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import Topic from './components/topic.jsx'
import Detail from './components/detail.jsx'
import User from './components/user.jsx'

ReactDOM.render(
<Router history={hashHistory}>
  <Route path="/" component={Topic} />
  <Route path="/topic/:topicId" component={Detail} />
  <Route path="/user/:loginname" component={User} />
</Router>, document.getElementById('container'))
