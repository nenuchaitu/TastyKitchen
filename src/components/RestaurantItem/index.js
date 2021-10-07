import {Link} from 'react-router-dom'

import {AiFillStar} from 'react-icons/ai'

import './index.css'

import {
  RestaurantListItem,
  RestaurantImage,
  DetailsContainer,
  RestaurantName,
  CuisineType,
  RestaurantItemRatingContainer,
  RestaurantItemRating,
} from './StyledComponents'

const RestaurantItem = props => {
  const {restaurantDetails} = props

  return (
    <Link to={`/restaurant/${restaurantDetails.id}`} className="link-item">
      <RestaurantListItem data-testid="restaurant-item">
        <RestaurantImage src={restaurantDetails.imageUrl} alt="restaurant" />
        <DetailsContainer>
          <RestaurantName>{restaurantDetails.name}</RestaurantName>
          <CuisineType>{restaurantDetails.cuisine}</CuisineType>
          <RestaurantItemRatingContainer>
            <AiFillStar color="#FFCC00" />
            <RestaurantItemRating>
              {restaurantDetails.userRating.rating}
            </RestaurantItemRating>
          </RestaurantItemRatingContainer>
        </DetailsContainer>
      </RestaurantListItem>
    </Link>
  )
}
export default RestaurantItem
