import React, { Component } from 'react';

class Channel extends Component {
  render() {
    return <p>{this.props.params.id}</p>;
  }
};

export default Channel;
