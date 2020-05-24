import React from 'react';

import { navigate, combine } from './utils';

function Link(props) {
  const { href, activeLink, children } = props;

  const handleClick = (e) => {
    e.preventDefault();
    navigate(href);
  };

  let className = props.className;
  if (activeLink && href === window.location.pathname) {
    className = combine(className || '', activeLink);
  }

  return (
    <a {...props} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
