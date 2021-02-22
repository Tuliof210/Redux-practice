import './Sweepstake.scss';
import React from 'react';

//REDUX
import { connect } from 'react-redux';

import Card from '../card/Card';

const Sweepstake = props => {
  const { min, max } = props;
  const random = parseInt(Math.random() * (max - min)) + min;
  console.log('Random:', { min, max });
  return (
    <Card title="Sorteio de um Número" color="yellow">
      <div className="sum-wrapper">
        <span>
          <span>Resultado:</span>
          <strong>{random}</strong>
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
export default connect(mapStateToProps)(Sweepstake);
