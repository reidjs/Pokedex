import ItemDetail from './item_detail';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectSingleItem } from '../../reducers/selectors';
const mapStateToProps = (state, ownProps) => {
  console.log('Map state to props: ', state.entities.items, ownProps.match.params.itemId);
  // console.log(selectSingleItem(state, ownProps.match.params.itemId));
  return ({
    // item: state.entities.items[ownProps.match.params.itemId]
    item: selectSingleItem(state, ownProps.match.params.itemId)
  });
};
//unsure if this will be used
// const mapDispatchToProps = dispatch => ({
//   requestItem: (id) => dispatch(requestItem(id))
// });
export default withRouter(connect(mapStateToProps)(ItemDetail));
