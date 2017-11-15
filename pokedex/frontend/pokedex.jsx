import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import { receiveAllPokemon } from './actions/pokemon_actions';
import { fetchAllPokemon } from './util/api_util';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  window.receiveAllPokemon = receiveAllPokemon;
  window.fetchAllPokemon = fetchAllPokemon;
  ReactDOM.render(<Root />, root);
});
