import React from 'react';

import { combine, isKeyPressed } from './utils';
import { useRouter } from './router';

function Link(props) {
  const router = useRouter();

  let className = props.className;
  if (props.href === router.path) {
    className = combine(className || '', 'active');
  }

  const handleClick = (e) => {
    if (!isKeyPressed(e)) {
      e.preventDefault();
      router.navigate(props.href);
    }
  };

  return (
    <a {...props} className={className} onClick={handleClick}>
      {props.children}
    </a>
  );
}

export default Link;
