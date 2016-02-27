import React, { Component } from 'react';
import ChannelItem from 'components/ChannelItem';

class ChannelList extends Component {
  constructor() {
    super();
    this.state = {
      channels: []
    };
  }

  componentDidMount() {
    var self = this;
    var request = new XMLHttpRequest();
    request.open('GET', 'http://somafm.com/channels.json');
    request.addEventListener('load', function() {
      var response = JSON.parse(this.responseText);
      self.setState({channels: response.channels});
    });
    request.send();
  }

  render() {
    return (
      <ul>
        {this.state.channels.map(function(channel, index) {
          return <ChannelItem key={index} data={channel}/>;
        })}
      </ul>
    );
  }
};

export default ChannelList;
