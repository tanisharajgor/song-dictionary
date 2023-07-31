// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// Libraries
import { NavLink } from 'react-router-dom';

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
    <NavigationLinks>
        <LinkList>
          <Link>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Ecosystem</NavLink>
          </Link>
          <Link>
            <NavLink to="/Network" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Network</NavLink>
          </Link>
          <Link className="Navigation_link">
            <NavLink to="/Help" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Help</NavLink>
          </Link>
        </LinkList>
      </NavigationLinks>
  );
}

export const NavigationLinks = styled('div')`
    flex: 1;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;

    padding: 0.625rem;
`;

export const LinkList = styled('ul')`
    list-style: none;
`;

export const Link = styled('li')`
    display: inline-block;
    flex-grow: 0;
    flex: 0;
    color: ${props => props.theme.color.secondary};
    padding: 0.625rem;
    border-radius: 0.375rem;
    font-size: ${props => props.theme.font.text};

    &:hover {
        background-color: ${props => props.theme.color.secondary};
        cursor: pointer;
    }

    &:hover > a {
        color: ${props => props.theme.color.main};
    }

    a {
        color: ${props => props.theme.color.secondary};
        text-decoration: none;
    }
    
    a.active {
        color: ${props => props.theme.color.main};
    }  
`;




