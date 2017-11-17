import * as APIUtil from '../util/api_util';
export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_SINGLE_POKEMON = "RECEIVE_SINGLE_POKEMON";

export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

//destructure pokemon: pokemon.items and items: pokemon.items
export const receiveSinglePokemon = ({ pokemon, items}) => {
  // debugger
  return ({
    type: RECEIVE_SINGLE_POKEMON,
    pokemon,
    items
  });
};

//thunk

export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);

export const requestSinglePokemon = (id) => (dispatch) => (
  APIUtil.fetchSinglePokemon(id)
    .then(response => {
      // debugger
      // console.log('Going to dispatch: ', pokemon);
       dispatch(receiveSinglePokemon(response));
     })
);
