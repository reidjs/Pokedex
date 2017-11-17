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
export const selectSingleItem = (state, itemId) => {
  // let items = state.entities.items
  // Object.keys(items)
  // let vals = values(items)
  // // console.log();
  //
  // debugger
  // return item;
  // console.log(state.entities.items);
  let items = state.entities.items;
  let itemsArr = values(items);
  // debugger
  return itemsArr.forEach((item) => {
    // console.log(item.id, 'looking for', itemId);
    //WARNING: comparing number to string
    if (item.id == itemId) {
      console.log('item found: ', item);
      return item;
    }
  });
  // console.log('No item found');
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
