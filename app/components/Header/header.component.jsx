"use strict";

import React from 'react';
import {Link} from 'react-router';
import UserMenu from '../UserMenu/userMenu.component';
import './header.css';

const Header = React.createClass({
  render() {
    return (
      <div className="layout-header">
        <Link to="/"></Link>
        <UserMenu />
      </div>
    );
  }
});

export default Header;