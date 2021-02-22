import './Sweepstake.scss';
import React from 'react';

import Card from '../card/Card';

export default props => {
  const { max, min } = props;
  const random = parseInt(Math.random() * (max - min)) + min;
  return (
    <Card title="Sorteio de um Número" color="yellow">
      <div className="sum-wrapper">
        <span>
          <span>Resultado:</span>
          <strong>{random}</strong>
        </span>
      </div>
    </Card>
  );
};
