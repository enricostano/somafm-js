import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Link to="/">
          <img src="http://somafm.com/linktous/450x50sfm1.gif"/>
        </Link>
      </header>
    );
  }
};

export default Header;
