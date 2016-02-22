import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import ChannelsContainer from 'containers/ChannelsContainer';
import Channel from 'components/Channel';

var div = document.createElement('div');
document.body.appendChild(div);

render((
  <Router history={browserHistory}>
    <Route path='/' component={ChannelsContainer}>
      <Route path='/channel/:id' component={Channel}/>
    </Route>
  </Router>
), div);
