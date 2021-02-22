import './Card.scss';
import React from 'react';

const getClass = (current, color = '') => {
  return `${current} ${color}`;
};

export default props => {
  return (
    <div className={getClass('card-wrapper', props['color'])}>
      <div className="header">
        <span className="title">{props['title']}</span>
      </div>
      <div className="content">{props.children}</div>
    </div>
  );
};
