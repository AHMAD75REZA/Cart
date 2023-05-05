import React from 'react';

class CartItem extends React.Component {
  constructor(){
    super();
    this.state = {
      price: 999,
      title: 'Mobile pjone',
      qty:1,
      img: ''
    }
  }

  render () {
    const { price, title, qty } = this.state;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={ { fontSize: 25 } }>Phone</div>
          <div style={ { color: '#777' } }>Rs 999</div>
          <div style={ { color: '#777' } }>Qty: 1</div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img alt="increase" className="action-icons" src="https://img.icons8.com/?size=512&id=1501&format=png"/>
            <img alt="decrease" className="action-icons" src="https://img.icons8.com/?size=512&id=1504&format=png" />
            <img alt="delete" className="action-icons" src="https://img.icons8.com/?size=512&id=1942&format=png" />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: 'blue'

  }
}

export default CartItem;