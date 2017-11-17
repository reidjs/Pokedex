import React from 'react';
class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
  }
  componentDidMount() {
    // console.log(this.props.match.params.pokemonId);
    console.log('sending request from prop for single poke');
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }
  componentWillReceiveProps(newProps) {
    // console.log('here');
    // console.log('newprop', newProps, this.props);
    if (newProps.match.params.pokemonId !== this.props.match.params.pokemonId) {
      console.log('mismatch: ', newProps.match, this.props.match);
      console.log('req single poke with id ', newProps.match.params.pokemonId);
      this.props.requestSinglePokemon(newProps.match.params.pokemonId);
      // this.props.requestSinglePokemon(this.props.match.params.pokemonId);
    }
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
        {console.log("show items: ", this.props.items)}
        <img className="poke-show-pic" src={this.props.pokemon.image_url} />
      </div>
    );
  }
}
// {console.log("detail pokemon: ", this.props.pokemon)}
export default PokemonDetail;
