import { createStore, combineReducers } from 'redux';

const reducers = combineReducers({
  numbers: (state, action) => {
    console.log({ state, action });
    return {
      min: 1,
      max: 10,
    };
  },
  names: (state, action) => {
    console.log({ state, action });
    return ['Ana', 'Bia', 'Pedro'];
  },
});

export default function storeConfing() {
  return createStore(reducers);
}
