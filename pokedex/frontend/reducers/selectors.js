import values from 'lodash/values';
export const selectAllPokemon = (state) => {
  let pokemon = state.entities.pokemon;
  let vals = values(pokemon);
  return vals;
};
export const selectAllItems = (state) => {
  let items = state.entities.items;
  let vals = values(items);
  return vals;
};
export const selectSingleItem = (state, itemId) => {

  let items = state.entities.items;
  let itemsArr = values(items);
  // debugger
  // for (let i = 0; i < itemsArr.length; i++) {
  //   if (itemsArr[i].id == itemId) {
  //     return itemsArr[i]
  //   }
  // }
  itemsArr.forEach((item) => {
    // console.log(item.id, 'looking for', itemId);
    //WARNING: comparing number to string
    if (item.id == itemId) {
      console.log('item found: ', item);
      return item;
    }
  });
};
