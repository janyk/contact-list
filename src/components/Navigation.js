import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DropdownButton, MenuItem } from 'react-bootstrap';

export class Navigation extends Component {
  render() {
    return (
      <div className="menu">
        <DropdownButton pullRight title={"Menu"} id='dropdown-menu'>
          <MenuItem><Link to='/'>Contact List</Link></MenuItem>
          <MenuItem><Link to='/alphabet-count'>Alphabet Count</Link></MenuItem>
        </DropdownButton>
      </div>
    )
  }
}

export default Navigation;
