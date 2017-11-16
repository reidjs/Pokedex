import React from 'react';
import { Provider } from 'react-redux';
// import App from './app';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import { HashRouter, Route, Switch } from 'react-router-dom';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';

const Root = ({ store }) => (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={PokemonIndexContainer} />
          <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
        </Switch>
      </HashRouter>
    </Provider>
);
// <PokemonIndexContainer />

export default Root;
