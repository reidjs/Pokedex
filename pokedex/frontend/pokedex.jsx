import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import { receiveAllPokemon } from './actions/pokemon_actions';
import { fetchAllPokemon } from './util/api_util';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.dispatch = store.dispatch;
  window.getState = store.getState
  window.receiveAllPokemon = receiveAllPokemon;
  window.fetchAllPokemon = fetchAllPokemon;
  ReactDOM.render(<Root />, root);
});
