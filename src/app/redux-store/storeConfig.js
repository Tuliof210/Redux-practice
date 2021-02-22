import { createStore, combineReducers } from 'redux';

const reducers = combineReducers({
  numbers: (state, action) => {
    // console.log({ state, action });
    return {
      min: 7,
      max: 48,
    };
  },
  names: (state, action) => {
    // console.log({ state, action });
    return ['Ana', 'Bia', 'Pedro'];
  },
});

function storeConfing() {
  return createStore(reducers);
}

export default storeConfing;
