import React from 'react';
class ItemDetail extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div>asdf{console.log('Item received: ', this.props.item)}</div>
    );
  }
}
// const ItemDetail = ({ props }) => (
// );

export default ItemDetail;
