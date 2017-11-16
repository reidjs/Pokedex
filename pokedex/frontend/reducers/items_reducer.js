import { RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';
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
      console.log('SUCCESS! single poke items:',action.items);
      let nextState = action.items;
      // debugger
      return nextState;
    default:
      // debugger
      console.log('items reducer hit default');
      return state;
  }
};

export default itemsReducer;
