import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
import { fetchAllPokemon } from './util/api_util';
import { selectAllPokemon } from './reducers/selectors';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  window.receiveAllPokemon = receiveAllPokemon;
  window.requestAllPokemon = requestAllPokemon;
  window.fetchAllPokemon = fetchAllPokemon;
  window.selectAllPokemon = selectAllPokemon;
  // window.requestAllPokemon = requestAllPokemon;
  ReactDOM.render(<Root store={store}/>, root);
});
