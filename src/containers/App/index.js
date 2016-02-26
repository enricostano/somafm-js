import React, { Component } from 'react';
import ChannelList from 'components/ChannelList';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          Soma FM
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
};

export default App;
