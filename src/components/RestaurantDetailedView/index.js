import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {AiFillStar} from 'react-icons/ai'

import {BiRupee} from 'react-icons/bi'

import Header from '../Header'

import Footer from '../Footer'

import FailureView from '../FailureView'

import FoodItem from '../FoodItem'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class RestaurantDetailedView extends Component {
  state = {RestaurantDetails: {}, apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getRestaurant()
  }

  getFormattedData = data => ({
    rating: data.rating,
    id: data.id,
    name: data.name,
    costForTwo: data.cost_for_two,
    cuisine: data.cuisine,
    imageUrl: data.image_url,
    reviewsCount: data.reviews_count,
    opensAt: data.opens_at,
    location: data.location,
    itemsCount: data.items_count,
    foodItems: data.food_items.map(foodItem => ({
      name: foodItem.name,
      cost: foodItem.cost,
      foodType: foodItem.food_type,
      imageUrl: foodItem.image_url,
      id: foodItem.id,
      rating: foodItem.rating,
    })),
  })

  getRestaurant = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const restaurantDetailsUrl = `https://apis.ccbp.in/restaurants-list/${id}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(restaurantDetailsUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const formattedData = this.getFormattedData(data)
      this.setState({
        RestaurantDetails: formattedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderRestaurantView = () => {
    const {RestaurantDetails} = this.state

    return (
      <>
        <div className="restaurant-banner-container">
          <img
            className="restaurant-banner-image"
            src={RestaurantDetails.imageUrl}
            alt="restaurant"
          />
          <div className="restaurant-text-details-container">
            <h1 className="restaurant-name">{RestaurantDetails.name}</h1>
            <p className="cuisine-type">{RestaurantDetails.cuisine}</p>
            <p className="address">{RestaurantDetails.location}</p>
            <div className="rating-and-cost-container">
              <div className="review-or-cost-container">
                <div className="value-container">
                  <AiFillStar color="#fff" />
                  <p className="value-text">{RestaurantDetails.rating}</p>
                </div>
                <p className="for-two-or-rating-text">
                  {RestaurantDetails.reviewsCount} + Ratings
                </p>
              </div>
              <p className="vertical-line">|</p>
              <div className="review-or-cost-container">
                <div className="value-container">
                  <BiRupee color="#fff" />
                  <p className="value-text">{RestaurantDetails.costForTwo}</p>
                </div>
                <p className="for-two-or-rating-text">Cost for Two</p>
              </div>
            </div>
          </div>
        </div>
        <ul className="food-item-cards-list">
          {RestaurantDetails.foodItems.map(eachItem => (
            <FoodItem key={eachItem.id} FoodItemDetails={eachItem} />
          ))}
        </ul>
      </>
    )
  }

  renderLoadingView = () => (
    <div className="loading-view-container">
      <Loader type="TailSpin" color="#FFCC00" height="50" width="50" />
    </div>
  )

  renderApiView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderRestaurantView()
      case apiStatusConstants.failure:
        return <FailureView />
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <div
          className="restaurant-details-container"
          testid="restaurant-details-loader"
        >
          {this.renderApiView()}
        </div>
        <Footer />
      </>
    )
  }
}
export default RestaurantDetailedView
