import React, { Component } from 'react';
import { Link } from 'react-router';

class ChannelItem extends Component {
  render() {
    return(
      <li>
        <Link to={`/channel/${this.props.data.id}`}>
          {this.props.data.title}
        </Link>
      </li>
    );
  }
};

export default ChannelItem;
