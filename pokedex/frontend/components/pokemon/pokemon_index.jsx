import React from 'react';

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

    let listPokes = this.props.pokemon.map((poke) =>
      <li>{poke.name}</li>
    );
    return (
      <div>
        <ul>
          {listPokes}
        </ul>
      </div>
    );
  }
}
export default PokemonIndex;
