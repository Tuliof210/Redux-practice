import './App.scss';
import React from 'react';

import Card from './components/card/Card';

export default props => {
  return (
    <div className="app-wrapper">
      <Card />
      <Card />
    </div>
  );
};
