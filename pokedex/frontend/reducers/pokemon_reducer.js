import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';
const _defaultState = {entities: {pokemon: {}}};
const pokemonReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      let nextState = action.pokemon;
      return nextState;
    default:
      return state;
  }
};

export default pokemonReducer;
