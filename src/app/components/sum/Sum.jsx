import './Sum.scss';
import React from 'react';

// REDUX
import { connect } from 'react-redux';

import Card from '../card/Card';

const Sum = props => {
  const { min, max } = props;
  console.log('SUM:', { min, max });
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

const mapStateToProps = state => {
  return {
    min: state['numbers'].min,
    max: state['numbers'].max,
  };
};
export default connect(mapStateToProps)(Sum);
