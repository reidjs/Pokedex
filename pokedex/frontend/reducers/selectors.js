import values from 'lodash/values';
export const selectAllPokemon = (state) => {
  let pokemon = state.entities.pokemon;
  // console.log(state);
  // let keys = Object.keys(pokemon);
  let vals = values(pokemon);
  // console.log(vals);
  return vals;
};
