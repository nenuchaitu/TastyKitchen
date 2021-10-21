import {Component} from 'react'

import CartItems from '../CartItems'

import {
  CartListContainerLarge,
  CartIndexHeading,
  CartIndexContainer,
  CartHorizontalLine,
  OrderTotalContainer,
  CartItemsList,
  CartPlaceOrderButton,
  PlaceOrderButtonContainer,
} from './StyledComponents'

const indexItemsList = [
  {
    indexId: 'ITEM',
    displayText: 'Item',
  },
  {
    indexId: 'QUANTITY',
    displayText: 'Quantity',
  },
  {
    indexId: 'PRICE',
    displayText: 'Price',
  },
]

class CartListView extends Component {
  state = {total: ''}

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

  updateTotal = amount => {
    this.setState(prevState => ({total: prevState.total + amount}))
  }

  render() {
    const {cartList} = this.props
    const {total} = this.state
    return (
      <>
        <CartListContainerLarge>
          <CartIndexContainer>
            {indexItemsList.map(index => (
              <CartIndexHeading key={index.indexId}>
                {index.displayText}
              </CartIndexHeading>
            ))}
          </CartIndexContainer>
          <CartItemsList>
            {cartList.map(cartItem => (
              <CartItems
                key={cartItem.id}
                cartItemDetails={cartItem}
                updateTotal={this.updateTotal}
              />
            ))}
          </CartItemsList>
          <CartHorizontalLine />
          <OrderTotalContainer>
            <CartIndexHeading>Order Total:</CartIndexHeading>
            <CartIndexHeading>{total}</CartIndexHeading>
          </OrderTotalContainer>
          <PlaceOrderButtonContainer>
            <CartPlaceOrderButton>Place Order</CartPlaceOrderButton>
          </PlaceOrderButtonContainer>
        </CartListContainerLarge>
      </>
    )
  }
}
export default CartListView
