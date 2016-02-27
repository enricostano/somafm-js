import React, { Component } from 'react';
import Player from 'components/Player';

class Channel extends Component {
  constructor() {
    super();
    this.state = {
      stream_url: ''
    };
  }

  setStreamUrl() {
    var self = this;
    var request = new XMLHttpRequest();
    request.open('GET', `http://somafm.com/${this.props.params.id}.pls`);
    request.addEventListener('load', function() {
      var pls = this.responseText.split('\n');
      var url = pls[2].split('=')[1];
      self.setState({stream_url: url});
    });
    request.send();
  }

  componentDidMount() {
    this.setStreamUrl();
  }

  componentDidUpdate(nextProps) {
    console.log(this.props.params.id)
    console.log(nextProps.params.id)
    if (this.props.params.id != nextProps.params.id) {
      this.setStreamUrl();
    }
  }

  render() {
    console.log(this.state.stream_url)
    return (
      <div>
        <p>{this.props.params.id}</p>
        <Player stream_url={this.state.stream_url}/>
      </div>
    );
  }
};

export default Channel;
