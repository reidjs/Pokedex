//best practice for dealing with nextstate/newstate/etc.
import { RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';
const _defaultState = {};
let nextState;
const pokemonReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      nextState = merge({}, state, action.pokemon);
      return nextState;
    case RECEIVE_SINGLE_POKEMON:
      // console.log("single poke payload received: ", action.items);
      console.log('reducer received single poke payload', action);
      nextState = merge({}, state, action.pokemon);
      return nextState;
    default:
      return state;
  }
};

export default pokemonReducer;
