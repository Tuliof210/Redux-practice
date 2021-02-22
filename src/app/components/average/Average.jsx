import './Average.scss';
import React from 'react';

import Card from '../card/Card';

export default props => {
  const { max, min } = props;
  return (
    <Card title="Média dos Números" color="pink">
      <div className="avg-wrapper">
        <span>
          <span>Resultado:</span>
          <strong>{(max + min) / 2}</strong>
        </span>
      </div>
    </Card>
  );
};
