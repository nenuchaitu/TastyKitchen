import {Component} from 'react'

import {Link} from 'react-router-dom'

import {Loader} from 'react-loader-spinner'

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
  inProgress: 'IN_PROGRESS',
}

class Cart extends Component {
  state = {apiStatus: apiStatusConstants.initial, cartList: []}

  componentDidMount() {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const cartItems = localStorage.getItem('cartData')
    if (cartItems !== null) {
      const cart = JSON.parse(cartItems)
      this.setState({cartList: cart})
    }
    const {paymentStatus} = this.props
    if (!paymentStatus) {
      this.setState({apiStatus: apiStatusConstants.cartView})
    } else {
      this.setState({apiStatus: apiStatusConstants.payment})
    }
  }

  setAPIPaymentView = () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {setCartListToEmpty} = this.props
    this.setState({apiStatus: apiStatusConstants.payment})
    const cartList = []
    localStorage.setItem('cartData', JSON.stringify(cartList))
    setCartListToEmpty()
  }

  renderEmptyCartView = () => (
    <div className="empty-cart-container">
      <img className="no-orders-image" alt="empty cart" src={noOrdersYet} />
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

  renderCartListView = () => {
    const {cartList} = this.state
    return (
      <>
        {cartList.length === 0 ? (
          this.renderEmptyCartView()
        ) : (
          <CartListView
            cartList={cartList}
            setAPIPaymentView={this.setAPIPaymentView}
          />
        )}
      </>
    )
  }

  renderLoadingView = () => (
    <div className="loading-view-container">
      <Loader type="TailSpin" color="#FFCC00" height="50" width="50" />
    </div>
  )

  renderCartView = () => {
    const {apiStatus} = this.state
    const {setPaymentStatus} = this.props
    switch (apiStatus) {
      case apiStatusConstants.cartView:
        return this.renderCartListView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.payment:
        return <PaymentView setPaymentStatus={setPaymentStatus} />
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <div className="cart-view-container">{this.renderCartView()}</div>
        <Footer />
      </>
    )
  }
}

export default Cart
