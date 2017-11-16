import React from 'react';
class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
  }
  componentDidMount() {
    // console.log(this.props.match.params.pokemonId);
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }
  componentWillReceive(newProps) {
    console.log('newprop', newProps, this.props);
    if (newProps.pokemonId !== this.props.pokemonId)
      this.props.requestSinglePokemon(newProps.match.params.pokemonId);
  }
  render() {
    if (this.props.pokemon === undefined) {
      return (
        <div>Loading</div>
      );
    }
    return (
      <div>
        Show detail
        {console.log("detail pokemon: ", this.props.pokemon)}
        <img className="poke-show-pic" src={this.props.pokemon.image_url} />
      </div>
    );
  }
}
export default PokemonDetail;
