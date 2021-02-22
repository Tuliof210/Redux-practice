import './Interval.scss';
import React from 'react';

import Card from '../card/Card';

// +"5" garante a converção para numero
export default props => {
  const { max, min } = props;
  return (
    <Card title="Intervalo de Números" color="blue">
      <div className="interval-wrapper">
        <span>
          <strong>Min:</strong>
          <input
            type="number"
            value={min}
            onChange={e => props.minChange(+e.target.value)}
          />
        </span>
        <span>
          <strong>Max: </strong>
          <input
            type="number"
            value={max}
            onChange={e => props.maxChange(+e.target.value)}
          />
        </span>
      </div>
    </Card>
  );
};
