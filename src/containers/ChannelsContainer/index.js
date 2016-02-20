import React, { Component } from 'react';
import ChannelList from 'components/ChannelList';

class ChannelsContainer extends Component {
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
      <ChannelList channels={this.state.channels}/>
    );
  }
};

export default ChannelsContainer;
