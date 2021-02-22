import './App.scss';
// 'useState' permite uso de estado em components funcionais
import React, { useState } from 'react';

import Interval from './components/interval/Interval';
import Avg from './components/average/Average';
import Sum from './components/sum/Sum';
import Sweepstake from './components/sweepstake/Sweepstake';

export default props => {
  //set altera diretamente o valor
  const [min, setMin] = useState(10);
  const [max, setMax] = useState(20);

  return (
    <div className="app-wrapper">
      <h3>Exercicios React-redux</h3>
      <div className="line">
        <Interval min={min} minChange={setMin} max={max} maxChange={setMax} />
      </div>
      <div className="line">
        <Avg min={min} max={max} />
        <Sum min={min} max={max} />
        <Sweepstake min={min} max={max} />
      </div>
    </div>
  );
};
