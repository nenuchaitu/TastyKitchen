import {Redirect} from 'react-router-dom'

import CartContext from '../../context/CartContext'

import noOrdersYet from '../Img/Cart/noOrdersYet.png'

import Header from '../Header'
import Footer from '../Footer'

import {
  EmptyCartContainer,
  NoOrdersImage,
  NoOrdersHeading,
  NoOrdersText,
  OrderNowButton,
  CartViewContainer,
} from './StyledComponents'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const renderEmptyCartView = () => (
        <EmptyCartContainer>
          <NoOrdersImage alt="empty cart" src={noOrdersYet} />
          <NoOrdersHeading>No Orders Yet!</NoOrdersHeading>
          <NoOrdersText>
            Your cart is empty. Add something from the menu.
          </NoOrdersText>
          <OrderNowButton type="button" onClick={() => <Redirect to="/" />}>
            Order Now
          </OrderNowButton>
        </EmptyCartContainer>
      )

      const renderCartItems = <h1>Hello almost there</h1>

      return (
        <>
          <Header />
          <CartViewContainer>
            {cartList.length === 0 ? renderEmptyCartView() : renderCartItems()}
          </CartViewContainer>
          <Footer />
        </>
      )
    }}
  </CartContext.Consumer>
)

export default Cart
