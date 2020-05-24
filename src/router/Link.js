import React from 'react';

import { combine } from './utils';

function Link(props) {
  const { href, children } = props;

  const handleClick = (e) => {
    e.preventDefault();
    // TODO: useRouter()
    // router.navigate(href);
  };

  let className = props.className;
  if (href === window.location.pathname) {
    className = combine(className || '', 'active');
  }

  return (
    <a {...props} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
