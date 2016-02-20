import React, { Component } from 'react';
import ChannelItem from 'components/ChannelItem';

class ChannelList extends Component {
  render() {
    return (
      <ol>
        {this.props.channels.map(function(channel, index) {
          return <ChannelItem key={index} data={channel}/>;
        })}
      </ol>
    );
  }
};

export default ChannelList;
