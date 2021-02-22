import './Interval.scss';
import React from 'react';

import Card from '../card/Card';

export default props => {
  return (
    <Card title="Intervalo de Números" color="blue">
      <div className="interval-wrapper">
        <span>
          <strong>Min:</strong>
          <input type="number" value={0} readOnly />
        </span>
        <span>
          <strong>Max: </strong>
          <input type="number" value={10} readOnly />
        </span>
      </div>
    </Card>
  );
};
