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
  render() {
    console.log(this.props.pokemon);

    // let listPokes = this.props.pokemon.map((poke) =>
    let listPokes = this.props.pokemon.map((poke) =>
      // <li>{poke.name}
      //
      // </li>
      <PokemonIndexItem poke={poke} />
    );
    return (
      <div>
        <ul>
          { listPokes }
        </ul>
      </div>
    );
  }
}
export default PokemonIndex;
