import {Component} from 'react'

import Cookies from 'js-cookie'

import {BsFilterLeft} from 'react-icons/bs'

import {GrFormNext, GrFormPrevious} from 'react-icons/gr'

import Loader from 'react-loader-spinner'

import FailureView from '../FailureView'

import Header from '../Header'

import Banner from '../Banner'

import Footer from '../Footer'

import RestaurantItem from '../RestaurantItem'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    offers: [],
    apiStatus: apiStatusConstants.initial,
    activeOption: '',
    restaurantList: [],
    activePageNumber: 1,
    totalNumberOfRestaurants: 0,
    searchInput: '',
  }

  componentDidMount() {
    this.setOffers()
    const {sortByOptions} = this.props
    this.setState(
      {activeOption: sortByOptions[1].value},
      this.getRestaurantList,
    )
    this.getRestaurantList()
  }

  setOffers = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {sortByOptions} = this.props
    const offersUrl = 'https://apis.ccbp.in/restaurants-list/offers'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(offersUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const formattedData = data.offers.map(offer => ({
        id: offer.id,
        imageUrl: offer.image_url,
      }))
      this.setState({
        offers: formattedData,
        activeOption: sortByOptions[1].value,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = () => (
    <div className="loading-view-container">
      <Loader type="TailSpin" color="#FFCC00" height="50" width="50" />
    </div>
  )

  renderFilter = () => {
    const {activeOption} = this.state
    const {sortByOptions} = this.props
    return (
      <>
        <div className="filter-container">
          <p className="tag-line">
            Select Your favourite restaurant special dish and make your day
            happy...
          </p>
          <div className="options-container">
            <BsFilterLeft />
            <p className="sort-by-text">Sort By</p>
            <select
              className="sort-by-select"
              value={activeOption}
              onChange={this.setActiveOption}
            >
              {sortByOptions.map(options => {
                const isActive = activeOption === options.value
                return (
                  <option
                    className="option-select"
                    value={options.value}
                    key={options.id}
                    isActive={isActive}
                  >
                    {options.value}
                  </option>
                )
              })}
            </select>
          </div>
        </div>
        <hr className="home-filter-restaurant-separator" />
      </>
    )
  }

  getFormattedUserRating = data => ({
    ratingText: data.rating_text,
    ratingColor: data.rating_color,
    totalReviews: data.total_reviews,
    rating: data.rating,
  })

  getRestaurantList = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {activePageNumber, searchInput, activeOption} = this.state
    const offset = (activePageNumber - 1) * 9
    const LIMIT = 9
    const restaurantListUrl = `https://apis.ccbp.in/restaurants-list?offset=${offset}&limit=${LIMIT}&sort_by_rating=${activeOption}&search=${searchInput}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    try {
      const response = await fetch(restaurantListUrl, options)
      if (response.ok) {
        const data = await response.json()
        const TotalRestaurants = data.total
        const formattedData = data.restaurants.map(restaurant => ({
          hasOnlineDelivery: restaurant.has_online_delivery,
          userRating: this.getFormattedUserRating(restaurant.user_rating),
          id: restaurant.id,
          name: restaurant.name,
          hasTableBooking: restaurant.has_table_booking,
          isDeliveringNow: restaurant.is_delivering_now,
          costForTwo: restaurant.cost_for_two,
          cuisine: restaurant.cuisine,
          imageUrl: restaurant.image_url,
          menuType: restaurant.menu_type,
          location: restaurant.location,
          opensAt: restaurant.opens_at,
          groupByItem: restaurant.group_by_time,
        }))
        this.setState({
          restaurantList: formattedData,
          apiStatus: apiStatusConstants.success,
          totalNumberOfRestaurants: TotalRestaurants,
        })
      } else {
        this.setState({apiStatus: apiStatusConstants.failure})
      }
    } catch (err) {
      console.log(err)
    }
  }

  setActiveOption = event => {
    this.setState({activeOption: event.target.value}, this.getRestaurantList)
  }

  previousPage = () => {
    const {activePageNumber} = this.state
    if (activePageNumber !== 1) {
      this.setState(
        prevState => ({
          activePageNumber: prevState.activePageNumber - 1,
        }),
        this.getRestaurantList,
      )
    }
  }

  nextPage = () => {
    const {activePageNumber, totalNumberOfRestaurants} = this.state
    if (activePageNumber !== Math.ceil(totalNumberOfRestaurants / 9)) {
      this.setState(
        prevState => ({
          activePageNumber: prevState.activePageNumber + 1,
        }),
        this.getRestaurantList,
      )
    }
  }

  renderPagination = () => {
    const {activePageNumber, totalNumberOfRestaurants} = this.state
    return (
      <div className="pagination-container">
        <button
          className="navigation-button"
          type="button"
          onClick={this.previousPage}
          testid="pagination-left-button"
        >
          <GrFormPrevious />
        </button>
        <p className="page-indicator" testid="active-page-number">
          {activePageNumber}
        </p>
        <p className="page-indicator">
          {' '}
          of {Math.ceil(totalNumberOfRestaurants / 9)}
        </p>
        <button
          className="navigation-button"
          type="button"
          onClick={this.nextPage}
          testid="pagination-right-button"
        >
          <GrFormNext />
        </button>
      </div>
    )
  }

  setSearchInput = event => {
    this.setState({searchInput: event.target.value}, this.getRestaurantList)
  }

  renderRestaurantsListView = () => {
    const {restaurantList, searchInput} = this.state
    return (
      <>
        <div className="restaurant-list-container">
          <h1 className="popular-heading">Popular Restaurants</h1>
          {this.renderFilter()}
          <input
            className="restaurant-search"
            type="search"
            onChange={this.setSearchInput}
            value={searchInput}
            placeholder="Search for a Restaurant..."
          />
          <ul className="restaurant-list">
            {restaurantList.map(restaurant => (
              <RestaurantItem
                restaurantDetails={restaurant}
                key={restaurant.id}
              />
            ))}
          </ul>
        </div>
        {this.renderPagination()}
      </>
    )
  }

  renderApiView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderRestaurantsListView()
      case apiStatusConstants.failure:
        return <FailureView getRestaurantList={this.getRestaurantList} />
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {offers} = this.state
    return (
      <div>
        <Header activeOption="HOME" />
        <div className="home-body-container">
          <div testid="restaurants-offers-loader">
            <Banner offers={offers} />
          </div>
          <div testid="restaurants-list-loader">{this.renderApiView()}</div>
        </div>
        <Footer />
      </div>
    )
  }
}
export default Home
