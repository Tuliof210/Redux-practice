import './Average.scss';
import React from 'react';

// REDUX
import { connect } from 'react-redux';

import Card from '../card/Card';

const Average = props => {
  const { min, max } = props;
  console.log('AVG:', { min, max });
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

const mapStateToProps = state => {
  return {
    min: state['numbers'].min,
    max: state['numbers'].max,
  };
};
export default connect(mapStateToProps)(Average);
