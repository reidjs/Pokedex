//best practice for dealing with nextstate/newstate/etc.
import { RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';
const _defaultState = {entities: {pokemon: {}}};
const pokemonReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      let nextState = action.pokemon;
      return nextState;
    case RECEIVE_SINGLE_POKEMON:
      let newState = action.pokemon;
      return newState;
    default:
      return state;
  }
};

export default pokemonReducer;
