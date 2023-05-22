// import React from 'react';

// class CartItem extends React.Component {
//   constructor(){
//     super();
//     this.state = {
//       price: 999,
//       title: 'Mobile pjone',
//       qty:1,
//       img: ''
//     }
//      this.increaseQuantity = this.increaseQuantity.bind(this);
//   }
//   increaseQuantity = () => {
//     // this.state.qty +=1;
//     // console.log('this', this.state);
//     // setstate form 1
//     this.setState({
//       qty:this.state.qty + 1
//     });
    
//     // setState form2 - if prevState required use this
//     this.setState((prevState) => {
//       return{
//         qty: prevState.qty + 1
//       }
//     });
//   }
//   render () {
//     const { price, title, qty } = this.state;
//     return (
//       <div className="cart-item">
//         <div className="left-block">
//           <img style={styles.image} />
//         </div>
//         <div className="right-block">
//           <div style={ { fontSize: 25 } }>Phone</div>
//           <div style={ { color: '#777' } }>Rs 999</div>
//           <div style={ { color: '#777' } }>Qty: 1</div>
//           <div className="cart-item-actions">
//             {/* Buttons */}
//             <img
//              alt="increase" 
//              className="action-icons" 
//              src="https://img.icons8.com/?size=512&id=1501&format=png"
//              onClick={this.increaseQuantity.bind(this)}
//              />

//             <img 
//             alt="decrease" 
//             className="action-icons" 
//             src="https://img.icons8.com/?size=512&id=1504&format=png" 
//             onClick={this.increaseQuantity}
//             />
//             <img alt="delete" className="action-icons" src="https://img.icons8.com/?size=512&id=1942&format=png" />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// const styles = {
//   image: {
//     height: 110,
//     width: 110,
//     borderRadius: 4,
//     background: 'blue'

//   }
// }

// export default CartItem;


import React from 'react';

const CartItem = (props) => {
  const { price, title, qty } = props.product;
  const {
    product,
    onIncreaseQuantity,
    onDecreaseQuantity,
    onDeleteProduct
  } = props;
  return (
    <div className="cart-item">
      
      <div className="right-block">
        <div style={ { fontSize: 25 } }>{title}</div>
        <div style={ { color: '#777' } }>Rs {price} </div>
        <div style={ { color: '#777' } }>Qty: {qty} </div>
        <div className="cart-item-actions">
          {/* Buttons */}
          <img
            alt="increase"
            className="action-icons"
            src="https://img.icons8.com/?size=512&id=1501&format=png"
            //  onClick={this.increaseQuantity.bind(this)}
            style={styles.img}
            onClick={() => onIncreaseQuantity(product)}
          />
          <img
            alt="decrease"
            className="action-icons"
            src="https://img.icons8.com/?size=512&id=1504&format=png" 
            onClick={() => onDecreaseQuantity(product)}
          />
          <img
            alt="delete"
            className="action-icons"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBi32HcSiBA8RBgI6awpRvGRQ--Tqtrj9N4A&usqp=CAU"

            onClick={() => onDeleteProduct(product.id)}
          />
        </div>
      </div>
    </div>
  );
}

const styles = {
  img: {
    height: 20,
    width: 20,
    borderRadius: 4,
    background: '#ccc'
  }
}

export default CartItem;