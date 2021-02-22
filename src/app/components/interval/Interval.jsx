import './Interval.scss';
import React from 'react';

// REDUX
import { connect } from 'react-redux';

import Card from '../card/Card';

const Interval = props => {
  const { min, max } = props;
  console.log('Interval:', { min, max });
  return (
    <Card title="Intervalo de Números" color="blue">
      <div className="interval-wrapper">
        <span>
          <strong>Min:</strong>
          <input type="number" value={min} />
        </span>
        <span>
          <strong>Max: </strong>
          <input type="number" value={max} />
        </span>
      </div>
    </Card>
  );
};

// mapea o estado geral da App para props do component
const mapStateToProps = state => {
  return {
    min: state['numbers'].min,
    max: state['numbers'].max,
  };
};
export default connect(mapStateToProps)(Interval);
