import './Sum.scss';
import React from 'react';

import Card from '../card/Card';

export default props => {
  return (
    <Card title="Soma dos Números" color="green">
      <div className="sum-wrapper">
        <span>
          <span>Resultado:</span>
          <strong>{5}</strong>
        </span>
      </div>
    </Card>
  );
};
