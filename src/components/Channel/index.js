import React, { Component } from 'react';

class Channel extends Component {
  render() {
    return <p>{this.props.params.id} hola!</p>;
  }
};

export default Channel;
