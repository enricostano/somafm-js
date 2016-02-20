import React from 'react';
import { render } from 'react-dom';
import ChannelList from 'components/ChannelList';

var div = document.createElement('div');
document.body.appendChild(div);

var request = new XMLHttpRequest();
request.open('GET', 'http://somafm.com/channels.json');
request.addEventListener('load', function() {
  var response = JSON.parse(this.responseText);
  render(
    <ChannelList channels={response.channels}/>,
    div
  );
});
request.send();
