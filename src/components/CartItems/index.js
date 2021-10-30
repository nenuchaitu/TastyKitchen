import {Component} from 'react'

import CartContext from '../../context/CartContext'

import Counter from '../Counter'

import './index.css'

class CartItems extends Component {
  state = {quantity: 0}

  componentDidMount() {
    const {cartItemDetails} = this.props
    const cartListString = localStorage.getItem('cartData')
    if (cartListString !== null) {
      const cartList = JSON.parse(cartListString)
      const foodObjectInCart = cartList.filter(
        cartItem => cartItemDetails.id === cartItem.id,
      )
      if (foodObjectInCart.length !== 0) {
        this.setState({quantity: foodObjectInCart[0].quantity})
      }
    }
  }

  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {cartItemDetails, updateTotal} = this.props
          const {name, imageUrl, cost, quantity} = cartItemDetails
          const {incrementCartItemQuantity, decrementCartItemQuantity} = value
          const incrementQuantity = () => {
            this.setState(prevState => ({quantity: prevState.quantity + 1}))
            incrementCartItemQuantity(cartItemDetails.id)
            updateTotal(cartItemDetails.cost)
          }
          const decrementQuantity = () => {
            this.setState(prevState => ({quantity: prevState.quantity - 1}))
            decrementCartItemQuantity(cartItemDetails.id)
            updateTotal(-1 * cartItemDetails.cost)
          }
          return (
            <li className="cart-list-item" testid="cartItem">
              <div className="image-item-container">
                <img
                  className="cart-item-image"
                  src={imageUrl}
                  alt="foodItem"
                />
                <div>
                  <h1 className="cart-item-name">{name}</h1>
                  <div className="cart-item-cost-and-counter-mobile-container">
                    <Counter
                      incrementQuantity={incrementQuantity}
                      decrementQuantity={decrementQuantity}
                      quantity={quantity}
                      testId={{
                        increment: 'increment-quantity',
                        decrement: 'decrement-quantity',
                        quantity: 'item-quantity',
                      }}
                    />
                    <p className="item-cost">{cost * quantity}</p>
                  </div>
                </div>
              </div>
              <div className="cart-item-cost-and-counter-container">
                <Counter
                  incrementQuantity={incrementQuantity}
                  decrementQuantity={decrementQuantity}
                  quantity={quantity}
                  testId={{
                    increment: 'increment-quantity',
                    decrement: 'decrement-quantity',
                    quantity: 'item-quantity',
                  }}
                />
                <p className="item-cost">{cost * quantity}</p>
              </div>
            </li>
          )
        }}
      </CartContext.Consumer>
    )
  }
}
export default CartItems
