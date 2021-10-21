import {Component} from 'react'

import {withRouter} from 'react-router-dom'

import CartContext from '../../context/CartContext'

import noOrdersYet from '../Img/Cart/noOrdersYet.png'

import Header from '../Header'
import Footer from '../Footer'
import CartListView from '../CartListView'
import PaymentView from '../PaymentView'

import {
  EmptyCartContainer,
  NoOrdersImage,
  NoOrdersHeading,
  NoOrdersText,
  OrderNowButton,
  OrderNowButtonContainer,
  CartViewContainer,
} from './StyledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  cartView: 'CART',
  payment: 'PAYMENT',
}

class Cart extends Component {
  state = {apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    const {paymentStatus} = this.props
    if (!paymentStatus) {
      this.setState({apiStatus: apiStatusConstants.cartView})
    } else {
      this.setState({apiStatus: apiStatusConstants.payment})
    }
  }

  setAPIPaymentView = () => {
    const {setCartListToEmpty} = this.props
    this.setState({apiStatus: apiStatusConstants.payment})
    const cartList = []
    localStorage.setItem('cartData', JSON.stringify(cartList))
    setCartListToEmpty()
  }

  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {cartList} = value
          const redirectToHome = () => {
            const {history} = this.props
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

          const renderCartListView = () => (
            <>
              {cartList.length === 0 ? (
                renderEmptyCartView()
              ) : (
                <CartListView
                  cartList={cartList}
                  setAPIPaymentView={this.setAPIPaymentView}
                />
              )}
            </>
          )

          const renderCartView = () => {
            const {apiStatus} = this.state
            const {setPaymentStatus} = this.props
            switch (apiStatus) {
              case apiStatusConstants.cartView:
                return renderCartListView()
              case apiStatusConstants.payment:
                return <PaymentView setPaymentStatus={setPaymentStatus} />
              default:
                return null
            }
          }

          return (
            <>
              <Header />
              <CartViewContainer>{renderCartView()}</CartViewContainer>
              <Footer />
            </>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default withRouter(Cart)
