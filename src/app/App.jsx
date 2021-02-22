import './App.scss';
import React from 'react';

import Interval from './components/interval/Interval';
import Card from './components/card/Card';

export default props => {
  return (
    <div className="app-wrapper">
      <h3>Exercicios React-redux</h3>
      <div className="line">
        <Interval />
      </div>
      <div className="line">
        <Card color="pink" title="Card 02">
          B
        </Card>
        <Card color="green" title="Card 03">
          C
        </Card>
        <Card color="yellow" title="Card 04">
          D
        </Card>
      </div>
    </div>
  );
};
