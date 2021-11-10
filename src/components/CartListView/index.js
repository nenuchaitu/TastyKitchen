import {Component} from 'react'

import CartItems from '../CartItems'

import './index.css'

class CartListView extends Component {
  state = {total: 0}

  componentDidMount() {
    this.getTotal()
  }

  getCartItemTotal = (sum, item) => sum + item.cost * item.quantity

  getTotal = () => {
    const {cartList} = this.props
    const cartTotal = cartList.reduce(
      (sum, item) => this.getCartItemTotal(sum, item),
      0,
    )
    this.setState({total: cartTotal})
  }

  render() {
    const {cartList, setAPIPaymentView} = this.props
    const {total} = this.state
    return (
      <>
        <div className="cart-list-container-large">
          <div className="cart-index-container">
            <h1 className="cart-index-heading item-name-placement">Item</h1>
            <h1 className="cart-index-heading item-quantity-spacing">
              Quantity
            </h1>
            <h1 className="cart-index-heading">Price</h1>
          </div>
          <ul className="cart-items-list ">
            {cartList.map(cartItem => (
              <CartItems
                key={cartItem.id}
                cartItemDetails={cartItem}
                getTotal={this.getTotal}
              />
            ))}
          </ul>
          <hr className="cart-horizontal-line" />
          <div className="order-total-container">
            <h1 className="cart-index-heading">Order Total:</h1>
            <h1 className="cart-index-heading" testid="total-price">
              {total}
            </h1>
          </div>
          <div className="place-order-button-container">
            <button
              className="cart-place-order-button"
              type="button"
              onClick={setAPIPaymentView}
            >
              Place Order
            </button>
          </div>
        </div>
      </>
    )
  }
}
export default CartListView
