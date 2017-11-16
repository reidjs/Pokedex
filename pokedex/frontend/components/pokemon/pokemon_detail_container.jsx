import { connect } from 'react-redux';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
// import { RECEIVE_SINGLE_POKEMON } from '../../reducers/pokemon_reducer';
import { withRouter } from 'react-router-dom';
import PokemonDetail from './pokemon_detail';
const mapStateToProps = state => ({
  pokemon: requestSinglePokemon(state)
});

const mapDispatchToProps = dispatch => ({
  requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PokemonDetail));
