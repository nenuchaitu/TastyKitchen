import {Link} from 'react-router-dom'

import {AiFillStar} from 'react-icons/ai'

import './index.css'

const RestaurantItem = props => {
  const {restaurantDetails} = props

  return (
    <Link to={`/restaurant/${restaurantDetails.id}`} className="link-item">
      <li className="restaurant-list-item" testid="restaurant-item">
        <img
          className="restaurant-image"
          src={restaurantDetails.imageUrl}
          alt="restaurant"
        />
        <div className="details-container">
          <h1 className="restaurant-name-home">{restaurantDetails.name}</h1>
          <p className="restaurant-list-item-cuisine-type">
            {restaurantDetails.cuisine}
          </p>
          <div className="restaurant-item-rating-container">
            <AiFillStar color="#FFCC00" />
            <p className="restaurant-item-rating">
              {restaurantDetails.userRating.rating}
            </p>
          </div>
        </div>
      </li>
    </Link>
  )
}
export default RestaurantItem
