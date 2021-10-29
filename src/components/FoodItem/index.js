import {Component} from 'react'

import {AiFillStar} from 'react-icons/ai'
import {BiRupee} from 'react-icons/bi'

import Counter from '../Counter'

import CartContext from '../../context/CartContext'

import './index.css'

class FoodItem extends Component {
  state = {quantity: 0}

  componentDidMount() {
    const {FoodItemDetails} = this.props
    const cartListString = localStorage.getItem('cartData')
    if (cartListString !== null) {
      const cartList = JSON.parse(cartListString)
      const foodObjectInCart = cartList.filter(
        cartItem => FoodItemDetails.id === cartItem.id,
      )
      if (foodObjectInCart.length !== 0) {
        this.setState({quantity: foodObjectInCart[0].quantity})
      }
    }
  }

  render() {
    const {quantity} = this.state
    return (
      <CartContext.Consumer>
        {value => {
          const {FoodItemDetails} = this.props
          const {
            addCartItem,
            incrementCartItemQuantity,
            decrementCartItemQuantity,
          } = value
          const incrementQuantity = () => {
            this.setState(prevState => ({quantity: prevState.quantity + 1}))
            incrementCartItemQuantity(FoodItemDetails.id)
          }
          const decrementQuantity = () => {
            this.setState(prevState => ({quantity: prevState.quantity - 1}))
            decrementCartItemQuantity(FoodItemDetails.id)
          }
          const onClickAddToCart = () => {
            this.setState({quantity: 1})
            addCartItem({
              cost: FoodItemDetails.cost,
              quantity: 1,
              id: FoodItemDetails.id,
              imageUrl: FoodItemDetails.imageUrl,
              name: FoodItemDetails.name,
            })
          }

          return (
            <li className="food-item-details-card" testid="foodItem">
              <img
                className="food-item-image"
                src={FoodItemDetails.imageUrl}
                alt="food item"
              />
              <div className="food-item-text-details-container">
                <p className="food-item-name">{FoodItemDetails.name}</p>
                <div className="rating-cost-container">
                  <BiRupee color="#334155" />
                  <p className="food-price-text">{FoodItemDetails.cost}</p>
                </div>
                <div className="rating-cost-container">
                  <AiFillStar color="#FFCC00" />
                  <p className="rating-value">{FoodItemDetails.rating}</p>
                </div>
                {quantity === 0 ? (
                  <button
                    className="add-button"
                    type="button"
                    onClick={onClickAddToCart}
                  >
                    Add
                  </button>
                ) : (
                  <Counter
                    quantity={quantity}
                    incrementQuantity={incrementQuantity}
                    decrementQuantity={decrementQuantity}
                    testId={{
                      increment: 'increment-count',
                      decrement: 'decrement-count',
                      quantity: 'active-count',
                    }}
                  />
                )}
              </div>
            </li>
          )
        }}
      </CartContext.Consumer>
    )
  }
}
export default FoodItem
