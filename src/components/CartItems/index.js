import {Component} from 'react'

import CartContext from '../../context/CartContext'

import Counter from '../Counter'

import {
  CartListItem,
  ImageItemContainer,
  CartItemImage,
  ItemCost,
  CartItemCostAndCounterContainer,
  CartItemCostAndCounterMobileContainer,
  CartItemName,
  CartNameContainer,
} from './StyledComponents'

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
            <CartListItem>
              <ImageItemContainer>
                <CartItemImage src={imageUrl} alt="foodItem" />
                <CartNameContainer>
                  <CartItemName>{name}</CartItemName>
                  <CartItemCostAndCounterMobileContainer>
                    <Counter
                      incrementQuantity={incrementQuantity}
                      decrementQuantity={decrementQuantity}
                      quantity={quantity}
                    />
                    <ItemCost>{cost * quantity}</ItemCost>
                  </CartItemCostAndCounterMobileContainer>
                </CartNameContainer>
              </ImageItemContainer>
              <CartItemCostAndCounterContainer>
                <Counter
                  incrementQuantity={incrementQuantity}
                  decrementQuantity={decrementQuantity}
                  quantity={quantity}
                />
                <ItemCost>{cost * quantity}</ItemCost>
              </CartItemCostAndCounterContainer>
            </CartListItem>
          )
        }}
      </CartContext.Consumer>
    )
  }
}
export default CartItems
