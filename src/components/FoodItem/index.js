import {Component} from 'react'

import {AiFillStar} from 'react-icons/ai'
import {BiRupee} from 'react-icons/bi'

import Counter from '../Counter'

import {
  FoodItemDetailsCard,
  FoodItemImage,
  FoodItemTextDetailsContainer,
  FoodItemName,
  FoodCostContainer,
  FoodPriceText,
  RatingContainer,
  RatingValue,
  AddButton,
} from './StyledComponents'

import CartContext from '../../context/CartContext'

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
            addCartItem({...FoodItemDetails, quantity: 1})
          }

          return (
            <FoodItemDetailsCard>
              <FoodItemImage src={FoodItemDetails.imageUrl} alt="food item" />
              <FoodItemTextDetailsContainer>
                <FoodItemName>{FoodItemDetails.name}</FoodItemName>
                <FoodCostContainer>
                  <BiRupee color="#334155" />
                  <FoodPriceText>{FoodItemDetails.cost}</FoodPriceText>
                </FoodCostContainer>
                <RatingContainer>
                  <AiFillStar color="#FFCC00" />
                  <RatingValue>{FoodItemDetails.rating}</RatingValue>
                </RatingContainer>
                {quantity === 0 ? (
                  <AddButton type="button" onClick={onClickAddToCart}>
                    Add
                  </AddButton>
                ) : (
                  <Counter
                    quantity={quantity}
                    incrementQuantity={incrementQuantity}
                    decrementQuantity={decrementQuantity}
                  />
                )}
              </FoodItemTextDetailsContainer>
            </FoodItemDetailsCard>
          )
        }}
      </CartContext.Consumer>
    )
  }
}
export default FoodItem
