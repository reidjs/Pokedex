import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import {requestSinglePokemon } from './actions/pokemon_actions';
// import { fetchAllPokemon } from './util/api_util';
// import { selectAllPokemon } from './reducers/selectors';
import configureStore from './store/store';
// import { HashRouter, Router } from 'react-router-dom';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  window.requestSinglePokemon = requestSinglePokemon;
  ReactDOM.render(<Root store={store}/>, root);
});

// window.requestAllPokemon = requestAllPokemon;
// window.fetchAllPokemon = fetchAllPokemon;
// window.selectAllPokemon = selectAllPokemon;
// // window.requestAllPokemon = requestAllPokemon;
