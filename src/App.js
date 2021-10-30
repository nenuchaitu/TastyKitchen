import {Component} from 'react'

import {Switch, Route, Redirect} from 'react-router-dom'

import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Home from './components/Home'
import Cart from './components/Cart'
import RestaurantDetailedView from './components/RestaurantDetailedView'
import NotFound from './components/NotFound'
import CartContext from './context/CartContext'

import './App.css'

const sortByOptions = [
  {
    id: 0,
    displayText: 'Highest',
    value: 'Highest',
  },
  {
    id: 2,
    displayText: 'Lowest',
    value: 'Lowest',
  },
]

class App extends Component {
  state = {cartList: [], paymentStatus: false}

  componentDidMount() {
    const cartListString = localStorage.getItem('cartData')
    const cartData = JSON.parse(cartListString)
    if (cartData !== null) {
      this.setState({cartList: cartData})
    } else {
      localStorage.setItem('cartData', JSON.stringify([]))
    }
  }

  removeCartItem = id => {
    const {cartList} = this.state
    const updatedCartList = cartList.filter(
      eachCartItem => eachCartItem.id !== id,
    )
    this.setState({cartList: updatedCartList}, this.setInLocalStorage)
  }

  setInLocalStorage = () => {
    const {cartList} = this.state
    localStorage.setItem('cartData', JSON.stringify(cartList))
  }

  addCartItem = FoodItem => {
    const {cartList} = this.state
    const FoodObject = cartList.find(
      eachCartItem => eachCartItem.id === FoodItem.id,
    )
    if (FoodObject) {
      this.setState(prevState => ({
        cartList: prevState.cartList.map(eachCartItem => {
          if (FoodObject.id === eachCartItem.id) {
            const updatedQuantity = eachCartItem.quantity + FoodItem.quantity
            return {...eachCartItem, quantity: updatedQuantity}
          }
          return eachCartItem
        }),
      }))
    } else {
      const updatedCartList = [...cartList, FoodItem]
      this.setState({cartList: updatedCartList}, this.setInLocalStorage)
    }
  }

  incrementCartItemQuantity = id => {
    this.setState(
      prevState => ({
        cartList: prevState.cartList.map(eachCartItem => {
          if (id === eachCartItem.id) {
            const updatedQuantity = eachCartItem.quantity + 1
            return {...eachCartItem, quantity: updatedQuantity}
          }
          return eachCartItem
        }),
      }),
      this.setInLocalStorage,
    )
  }

  decrementCartItemQuantity = id => {
    const {cartList} = this.state
    const productObject = cartList.find(eachCartItem => eachCartItem.id === id)
    if (productObject.quantity > 1) {
      this.setState(
        prevState => ({
          cartList: prevState.cartList.map(eachCartItem => {
            if (id === eachCartItem.id) {
              const updatedQuantity = eachCartItem.quantity - 1
              return {...eachCartItem, quantity: updatedQuantity}
            }
            return eachCartItem
          }),
        }),
        this.setInLocalStorage,
      )
    } else {
      this.removeCartItem(id)
    }
  }

  setCartListToEmpty = () => {
    this.setState({cartList: [], paymentStatus: true})
  }

  setPaymentStatus = () => {
    this.setState({paymentStatus: false})
  }

  render() {
    const {cartList, paymentStatus} = this.state
    return (
      <CartContext.Provider
        value={{
          cartList,
          addCartItem: this.addCartItem,
          removeCartItem: this.removeCartItem,
          incrementCartItemQuantity: this.incrementCartItemQuantity,
          decrementCartItemQuantity: this.decrementCartItemQuantity,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute
            exact
            path="/cart"
            component={() => (
              <Cart
                setCartListToEmpty={this.setCartListToEmpty}
                paymentStatus={paymentStatus}
                setPaymentStatus={this.setPaymentStatus}
              />
            )}
          />
          <ProtectedRoute
            exact
            path="/"
            component={() => <Home sortByOptions={sortByOptions} />}
          />
          <ProtectedRoute
            exact
            path="/restaurant/:id"
            component={RestaurantDetailedView}
          />
          <Route exact path="/bad-path" component={NotFound} />
          <Redirect to="bad-path" />
        </Switch>
      </CartContext.Provider>
    )
  }
}

export default App
