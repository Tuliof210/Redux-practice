import './Sweepstake.scss';
import React from 'react';

import Card from '../card/Card';

export default props => {
  return (
    <Card title="Sorteio de um Número" color="yellow">
      <div className="sum-wrapper">
        <span>
          <span>Resultado:</span>
          <strong>{12}</strong>
        </span>
      </div>
    </Card>
  );
};
