import ItemDetail from './item_detail';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectSingleItem } from '../../reducers/selectors';
const mapStateToProps = (state, ownProps) => {
  console.log(state.entities.items);
  return ({
    item: selectSingleItem(state, ownProps.match.params.itemId)
  });
};

export default withRouter(connect(mapStateToProps, null)(ItemDetail));
