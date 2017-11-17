import { RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';
const _defaultState = {items: {}};

// const RECEIVE_ITEMS = "RECEIVE_ITEMS";
//fails silently
const itemsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  // action = {
  //   type: RECEIVE_SINGLE_POKEMON,
  //   items: {'asdf': 5}
  // };
  // debugger
  switch(action.type) {
    case RECEIVE_SINGLE_POKEMON:
      console.log('oldstate:', state);
      console.log('SUCCESS! single poke items:',action.items);
      let nextState = merge({}, state, action.items);
      // debugger
      return nextState;
    default:
      // debugger
      console.log('items reducer hit default');
      return state;
  }
};

export default itemsReducer;
