import './Average.scss';
import React from 'react';

import Card from '../card/Card';

export default props => {
  return (
    <Card title="Média dos Números" color="pink">
      <div className="avg-wrapper">
        <span>
          <span>Resultado:</span>
          <strong>5</strong>
        </span>
      </div>
    </Card>
  );
};
