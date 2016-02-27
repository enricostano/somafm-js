import React, { Component } from 'react';

class Player extends Component {
  render() {
    return (
      <audio src={this.props.stream_url} controls autoplay></audio>
    );
  }
};

export default Player;
