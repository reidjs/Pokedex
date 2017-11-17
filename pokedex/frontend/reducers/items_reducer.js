import { RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';
const _defaultState = {};

const itemsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SINGLE_POKEMON:
      // let nextState = merge({}, state, action.items);
      let nextState = merge({}, state);
      action.items.forEach((el) => {
        nextState[el.id] = el;
      });
      // let nextState = merge([], state, action.items);
      return nextState;
    default:
      return state;
  }
};

export default itemsReducer;
