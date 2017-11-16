import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import PokemonDetail from './pokemon_detail';
import { Route } from 'react-router-dom';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { pokemon: [] };
  }
  componentDidMount() {
    this.props.requestAllPokemon();
    // console.log(this.props.pokemon);
    // this.setState( {pokemon: this.props.pokemon} );
  }
  // console.log(this.props.pokemon);
  render() {
    const pokemonItems = this.props.pokemon.map(poke =>
      <PokemonIndexItem key={poke.id} pokemon={poke} />
    );

    // let listPokes = this.props.pokemon.map((poke) =>
    return (
      <section className="pokedex">
        <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
        <ul>
          { pokemonItems } 
        </ul>

      </section>
    );
  }
}
export default PokemonIndex;
