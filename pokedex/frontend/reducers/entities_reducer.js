import { combineReducers } from 'redux';
import pokemonReducer from './pokemon_reducer';
import itemsReducer from './items_reducer';
//Send items to itemsReducer, pokemon to pokemonReducer
const entitiesReducer = combineReducers({
  items: itemsReducer,
  pokemon: pokemonReducer
});

export default entitiesReducer;
