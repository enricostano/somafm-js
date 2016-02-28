import React, { Component } from 'react';
import { Link } from 'react-router';
import './styles/index.css';

class ChannelItem extends Component {
  render() {
    return(
      <li>
        <Link to={`/channel/${this.props.data.id}`} className="channel-item">
          {this.props.data.title}
        </Link>
      </li>
    );
  }
};

export default ChannelItem;
