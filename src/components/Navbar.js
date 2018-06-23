import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './Navbar.scss';

const Navbar = ({ activeNav, handleActive, headers }) => {
  {/* CSS Transition is only used for the mounting of the component */}
  return (
    <CSSTransition
      in
      classNames="fade"
      appear={true}
      timeout={500}
    >
      <div className="navbar-wrapper">
        {headers.map(title => {
          // CSS transitions used for state changes
          const isHighlighted = activeNav === title ? 'active' : 'inactive';
          return (
            <div
              className={isHighlighted}
              key={title}
              onClick={() => handleActive(title)}
            >
              {title}
            </div>
          );
        })}
      </div>
    </CSSTransition>
  );
};

export default Navbar;