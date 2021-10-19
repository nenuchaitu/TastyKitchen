import CartItems from '../CartItems'

import {
  CartListContainerLarge,
  CartListContainerMobile,
  CartIndexHeading,
  CartIndexContainer,
  CartHorizontalLine,
  OrderTotalContainer,
  CartItemsList,
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

const CartListView = props => {
  const {cartList} = props
  const getCartItemTotal = (sum, item) => sum + item.cost + item.quantity
  const Total = cartList.reduce((sum, item) => getCartItemTotal(sum, item), 0)

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
            <CartItems key={cartItem.id} cartItemDetails={cartItem} />
          ))}
        </CartItemsList>
        <CartHorizontalLine />
        <OrderTotalContainer>
          <CartIndexHeading>Order Total:</CartIndexHeading>
          <CartIndexHeading>{Total}</CartIndexHeading>
        </OrderTotalContainer>
      </CartListContainerLarge>
      <CartListContainerMobile>mobile</CartListContainerMobile>
    </>
  )
}
export default CartListView
