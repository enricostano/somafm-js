import React, { Component } from 'react';
import Header from 'components/Header';
import './styles/index.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <section className="sidebar">
          {this.props.sidebar}
        </section>
        <section className="content">
          {this.props.content}
        </section>
      </div>
    );
  }
};

export default App;
