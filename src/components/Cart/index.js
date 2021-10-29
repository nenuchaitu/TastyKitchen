import {Component} from 'react'

import {Link} from 'react-router-dom'

import CartContext from '../../context/CartContext'

import noOrdersYet from '../Img/Cart/noOrdersYet.png'

import Header from '../Header'
import Footer from '../Footer'
import CartListView from '../CartListView'
import PaymentView from '../PaymentView'

import './index.css'

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

          const renderEmptyCartView = () => (
            <div className="empty-cart-container">
              <img
                className="no-orders-image"
                alt="empty cart"
                src={noOrdersYet}
              />
              <h1 className="no-orders-heading">No Order Yet!</h1>
              <p className="no-orders-text">
                Your cart is empty. Add something from the menu.
              </p>
              <div className="order-now-button-container">
                <Link to="/" className="home-redirect">
                  <button className="order-now-button" type="button">
                    Order Now
                  </button>
                </Link>
              </div>
            </div>
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
              <div className="cart-view-container">{renderCartView()}</div>
              <Footer />
            </>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default Cart
