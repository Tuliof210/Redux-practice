import './App.scss';
import React from 'react';

import Card from './components/card/Card';

export default props => {
  return (
    <div className="app-wrapper">
      <h3>Exercicios React-redux</h3>
      <div className="line">
        <Card color="red" title="Card 01">
          A
        </Card>
      </div>
      <div className="line">
        <Card color="blue" title="Card 02">
          B
        </Card>
      </div>
      <div className="line">
        <Card color="green" title="Card 03">
          C
        </Card>
      </div>
      <div className="line">
        <Card color="yellow" title="Card 04">
          D
        </Card>
      </div>
      <div className="line">
        <Card color="pink" title="Card 05">
          E
        </Card>
      </div>
    </div>
  );
};
