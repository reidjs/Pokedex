import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
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
        <ul>
          { pokemonItems }
        </ul>
      </section>
    );
  }
}
export default PokemonIndex;
