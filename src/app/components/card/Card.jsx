import './Card.scss';
import React from 'react';

export default props => {
  return (
    <div className={`card-wrapper ${props['color']}`}>
      <div className="header">
        <span className="title">{props['title']}</span>
      </div>
      <div className="content">{props.children}</div>
    </div>
  );
};
