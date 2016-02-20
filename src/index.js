import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import ChannelsContainer from 'containers/ChannelsContainer';
import Channel from 'components/Channel';

var div = document.createElement('div');
document.body.appendChild(div);

render((
  <Router history={hashHistory}>
    <Route path='/' component={ChannelsContainer}>
      <Route path='channel' component={Channel}>
      </Route>
    </Route>
  </Router>
), div);
