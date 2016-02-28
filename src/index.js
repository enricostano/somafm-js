import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from 'containers/App';
import ChannelList from 'components/ChannelList';
import Blank from 'components/Blank';
import Channel from 'components/Channel';

var div = document.createElement('div');
document.body.appendChild(div);

render((
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute components={{ sidebar: ChannelList, content: Blank }}/>
      <Route path='channel' components={{ sidebar: ChannelList, content: Channel }}>
        <Route path=':id' component={Channel}/>
      </Route>
    </Route>
    <Route path='*' component={() => alert('404')}/>
  </Router>
), div);
