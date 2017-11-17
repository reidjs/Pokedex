import values from 'lodash/values';
export const selectAllPokemon = (state) => {
  let pokemon = state.entities.pokemon;
  // console.log(state);
  // let keys = Object.keys(pokemon);
  let vals = values(pokemon);
  // console.log(vals);
  return vals;
};
export const selectAllItems = (state) => {
  let items = state.entities.items;
  let vals = values(items);
  return vals;
};
// export const selectSinglePokemon = (state, id) => {
//   let pokemon = state.entities.pokemon;
//   // console.log(state);
//   // let keys = Object.keys(pokemon);
//   let vals = values(pokemon);
//   // console.log(vals);
//   return vals;
// };
// export const selectSinglePokemon = (state) => {
//   let pokemon = state.entities.pokemon;
//   // console.log(state);
//   // let keys = Object.keys(pokemon);
//   let vals = values(pokemon);
//   // console.log(vals);
//   return vals;
// };
