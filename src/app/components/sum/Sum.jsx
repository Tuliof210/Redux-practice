import './Sum.scss';
import React from 'react';

import Card from '../card/Card';

export default props => {
  const { max, min } = props;
  return (
    <Card title="Soma dos Números" color="green">
      <div className="sum-wrapper">
        <span>
          <span>Resultado:</span>
          <strong>{max + min}</strong>
        </span>
      </div>
    </Card>
  );
};
