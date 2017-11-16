import { RECEIVE_SINGLE_POKEMON } from './pokemon_reducer';
const _defaultState = {entities: {items: {}}};

// const RECEIVE_ITEMS = "RECEIVE_ITEMS";

const itemsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SINGLE_POKEMON:
      let nextState = action.items;
      return nextState;
    default:
      return state;
  }
};

export default itemsReducer;
