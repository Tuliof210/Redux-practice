import './App.scss';
import React from 'react';

import Interval from './components/interval/Interval';
import Avg from './components/average/Average';
import Sum from './components/sum/Sum';
import Sweepstake from './components/sweepstake/Sweepstake';

export default props => {
  return (
    <div className="app-wrapper">
      <h3>Exercicios React-redux</h3>
      <div className="line">
        <Interval />
      </div>
      <div className="line">
        <Avg />
        <Sum />
        <Sweepstake />
      </div>
    </div>
  );
};
