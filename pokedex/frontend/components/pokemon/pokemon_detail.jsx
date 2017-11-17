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
    let itemItems = "No items";
    if (this.props.items !== undefined) {
      console.log(this.props.items);
      itemItems = this.props.items.map(item =>
        <li>{item.name}</li>
      );
    }

    return (
      <div>
        {console.log("show items: ", this.props.items)}
        <img className="poke-show-pic" src={this.props.pokemon.image_url} />
        <ul>
          { itemItems }
        </ul>
      </div>
    );
  }
}
// {console.log("detail pokemon: ", this.props.pokemon)}
export default PokemonDetail;
