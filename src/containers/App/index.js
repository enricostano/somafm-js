import React, { Component } from 'react';
import './styles/index.css';

class App extends Component {
  render() {
    return (
      <div>
        <header className="header">
          Soma FM
        </header>
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
