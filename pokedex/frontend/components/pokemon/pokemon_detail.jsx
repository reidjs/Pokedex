import React from 'react';
class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
  }
  componentDidMount() {
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }
  componentWillReceive(newProps) {
    if (newProps.pokemonId != this.props.pokemonId)
      this.props.requestSinglePokemon(newProps.match.params.pokemonId);
  }
  render() {
    return (
      <div>
        Show detail
        <img className="poke-show-pic" src={this.props.pokemon.image_url} />
      </div>
    );
  }
}
export default PokemonDetail;
