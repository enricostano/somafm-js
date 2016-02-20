import React, { Component } from 'react';

class ChannelItem extends Component {
  render() {
    return <li>{this.props.data.title}</li>;
  }
};

export default ChannelItem;
