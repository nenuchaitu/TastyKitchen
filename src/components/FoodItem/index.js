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

  incrementQuantity = () => {
    this.setState(prevState => ({quantity: prevState.quantity + 1}))
  }

  decrementQuantity = () => {
    this.setState(prevState => ({quantity: prevState.quantity - 1}))
  }

  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {FoodItemDetails} = this.props
          const {addCartItem} = value
          const {quantity} = this.state
          const onClickAddToCart = () => {
            this.setState({quantity: 1})
            addCartItem({...FoodItemDetails, quantity})
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
                    incrementQuantity={this.incrementQuantity}
                    decrementQuantity={this.decrementQuantity}
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
