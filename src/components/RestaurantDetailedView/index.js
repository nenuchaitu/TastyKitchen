import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {AiFillStar} from 'react-icons/ai'

import {BiRupee} from 'react-icons/bi'

import Header from '../Header'

import Footer from '../Footer'

import FailureView from '../FailureView'

import FoodItem from '../FoodItem'

import {
  LoadingViewContainer,
  RestaurantDetailsContainer,
  RestaurantBannerContainer,
  RestaurantBannerImage,
  RestaurantTextDetailsContainer,
  RestaurantName,
  Address,
  CuisineType,
  RatingAndCostContainer,
  ValueContainer,
  VerticalLine,
  ValueText,
  ForText,
  ReviewOrCostContainer,
  FoodItemCardsList,
} from './StyledComponents'

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
    try {
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
    } catch (err) {
      console.log(err)
    }
  }

  renderRestaurantView = () => {
    const {RestaurantDetails} = this.state

    return (
      <>
        <RestaurantBannerContainer>
          <RestaurantBannerImage
            src={RestaurantDetails.imageUrl}
            alt="restaurant"
          />
          <RestaurantTextDetailsContainer>
            <RestaurantName>{RestaurantDetails.name}</RestaurantName>
            <CuisineType>{RestaurantDetails.cuisine}</CuisineType>
            <Address>{RestaurantDetails.location}</Address>
            <RatingAndCostContainer>
              <ReviewOrCostContainer>
                <ValueContainer>
                  <AiFillStar color="#fff" />
                  <ValueText>{RestaurantDetails.rating}</ValueText>
                </ValueContainer>
                <ForText>{RestaurantDetails.reviewsCount}+ Ratings</ForText>
              </ReviewOrCostContainer>
              <VerticalLine>|</VerticalLine>
              <ReviewOrCostContainer>
                <ValueContainer>
                  <BiRupee color="#fff" />
                  <ValueText>{RestaurantDetails.costForTwo}</ValueText>
                </ValueContainer>
                <ForText>Cost for Two</ForText>
              </ReviewOrCostContainer>
            </RatingAndCostContainer>
          </RestaurantTextDetailsContainer>
        </RestaurantBannerContainer>
        <FoodItemCardsList>
          {RestaurantDetails.foodItems.map(eachItem => (
            <FoodItem key={eachItem.id} FoodItemDetails={eachItem} />
          ))}
        </FoodItemCardsList>
      </>
    )
  }

  renderLoadingView = () => (
    <LoadingViewContainer>
      <Loader type="TailSpin" color="#FFCC00" height="50" width="50" />
    </LoadingViewContainer>
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
        <div testid="restaurant-details-loader">
          <RestaurantDetailsContainer>
            {this.renderApiView()}
          </RestaurantDetailsContainer>
        </div>
        <Footer />
      </>
    )
  }
}
export default RestaurantDetailedView
