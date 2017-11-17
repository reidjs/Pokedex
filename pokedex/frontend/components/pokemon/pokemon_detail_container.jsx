import { connect } from 'react-redux';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import { selectAllPokemon } from '../../reducers/selectors';

// import { RECEIVE_SINGLE_POKEMON } from '../../reducers/pokemon_reducer';
import { withRouter } from 'react-router-dom';
import PokemonDetail from './pokemon_detail';
//Issue: we are passing down ALL pokemon instead of just single show pokemon
const mapStateToProps = (state, ownProps) => ({
  pokemon: state.entities.pokemon[ownProps.match.params.pokemonId],
  items: state.entities.items
});

const mapDispatchToProps = dispatch => ({
  requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PokemonDetail));
