import React, { Component } from 'react';
import ChannelItem from 'components/ChannelItem';
import './styles/index.css';
import $ from 'jquery';

class ChannelList extends Component {
  constructor() {
    super();
    this.state = {
      channels: []
    };
  }

  componentDidMount() {
    console.log($('.sidebar'));
    $.post({
      url: 'http://192.168.1.40:9091/transmission/rpc',
      headers: {
        Authorization: "Basic " + btoa("transmission:PASSWORD")
      },
      success: function(response) {
        console.log('HOLA');
      }
    }).fail(function() {
      console.log('M I E R D A');
    }
          );
    //var self = this;
    //var request = new XMLHttpRequest();
    //request.addEventListener('error', function() {
    //  console.log('ERROR');
    //  console.log(this);
    //});
    //request.addEventListener('load', function() {
    //  var response = JSON.parse(this.responseText);
    //  self.setState({channels: response.channels});
    //});
    //request.open('POST', 'http://192.168.1.40:9091/transmission/rpc');
    //request.setRequestHeader('Authorization', 'Basic' + btoa('transmission:papapa22'));
    //request.withCredentials = 'true';
    //request.send();
  }

  render() {
    return (
      <ul className="channel-list">
        {this.state.channels.map(function(channel, index) {
          return <ChannelItem key={index} data={channel}/>;
        })}
      </ul>
    );
  }
};

export default ChannelList;
