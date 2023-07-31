// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// Libraries
import { NavLink } from 'react-router-dom';

// Styles
import { NavigationBranding, StyledLayoutHeader, NavigationLinks, LinkList, Link } from './style';

// Prop types
Navigation.propTypes = {
  isFullscreen: PropTypes.node.isRequired
};

/**
 * Menu Navigation bar to navigate to different parts of the project
 * @returns
 */
export function Navigation ({ isFullscreen }) {
  return (
    <nav className="navbar">
      <div className="logo">Your Logo</div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Help</a></li>
      </ul>
    </nav>
  );
}



