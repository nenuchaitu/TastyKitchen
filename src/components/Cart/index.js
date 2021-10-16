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
  OrderNowButtonContainer,
  CartViewContainer,
} from './StyledComponents'

const Cart = props => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const redirectToHome = () => {
        const {history} = props
        history.replace('/')
      }

      const renderEmptyCartView = () => (
        <EmptyCartContainer>
          <NoOrdersImage alt="empty cart" src={noOrdersYet} />
          <NoOrdersHeading>No Orders Yet!</NoOrdersHeading>
          <NoOrdersText>
            Your cart is empty. Add something from the menu.
          </NoOrdersText>
          <OrderNowButtonContainer>
            <OrderNowButton type="button" onClick={redirectToHome}>
              Order Now
            </OrderNowButton>
          </OrderNowButtonContainer>
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
