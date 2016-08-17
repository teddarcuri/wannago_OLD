import React, { Component } from 'react';

const headerStyles = {
  position  : 'fixed',
  width     : '100%',
  height    : '55px',
  background: '#111',
  top       : '0',
  left      : '0',
  color     : '#fff',
}

class Header extends Component {
  render() {
    return (
      <header
        id="global-header"
        style={headerStyles}
      >
        <span>Wannago</span>
      </header>
    )
  }
}

export default Header;
