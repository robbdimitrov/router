import React from 'react';

import { combine } from './utils';
import { useRouter } from './';

function Link(props) {
  const { href, children } = props;

  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.navigate(href);
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
