import { RECEIVE_SINGLE_POKEMON } from './pokemon_reducer';
const _defaultState = 0; //pokeDisplay id #

// const RECEIVE_ITEMS = "RECEIVE_ITEMS";

const uiReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SINGLE_POKEMON:
      let nextState = action.pokemon.id;
      return nextState;
    default:
      return state;
  }
};

export default uiReducer;
