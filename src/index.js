import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from 'containers/App';
import ChannelList from 'components/ChannelList';
import Channel from 'components/Channel';

var div = document.createElement('div');
document.body.appendChild(div);

render((
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={ChannelList} />
      <Route path='channel/:id' component={Channel}/>
    </Route>
    <Route path='*' component={() => alert('404')} />
  </Router>
), div)
