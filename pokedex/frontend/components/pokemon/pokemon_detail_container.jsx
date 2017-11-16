import { connect } from 'react-redux';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import { selectSinglePokemon } from '../../reducers/pokemon_reducer';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = state => ({
  pokemon: selectSinglePokemon(state)
});

const mapDispatchToProps = dispatch => ({
  requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
