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

import {
  RestaurantList,
  PopularHeading,
  HomeBodyContainer,
  RestaurantListContainer,
  FilterContainer,
  TagLine,
  OptionsContainer,
  SortBy,
  Option,
  LoadingViewContainer,
  Separator,
  NavigationButton,
  PaginationContainer,
  PageIndicator,
} from './StyledComponents'

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
    totalNumberOfRestaurants: '',
  }

  componentDidMount() {
    this.setData()
    const {sortByOptions} = this.props
    this.setState(
      {activeOption: sortByOptions[1].value},
      this.getRestaurantList,
    )
  }

  setData = async () => {
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
    <LoadingViewContainer>
      <Loader type="TailSpin" color="#FFCC00" height="50" width="50" />
    </LoadingViewContainer>
  )

  renderFilter = () => {
    const {activeOption} = this.state
    const {sortByOptions} = this.props
    return (
      <>
        <FilterContainer>
          <TagLine>
            Select Your favourite restaurant special dish and make your day
            happy...
          </TagLine>
          <OptionsContainer>
            <BsFilterLeft />
            <SortBy value={activeOption} onChange={this.setActiveOption}>
              {sortByOptions.map(options => {
                const isActive = activeOption === options.value
                return (
                  <Option
                    value={options.value}
                    key={options.id}
                    isActive={isActive}
                  >
                    Sort by {options.value}
                  </Option>
                )
              })}
            </SortBy>
          </OptionsContainer>
        </FilterContainer>
        <Separator />
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
    const {activePageNumber} = this.state
    const offset = (activePageNumber - 1) * 9
    const LIMIT = 9
    const {activeOption} = this.state
    const restaurantListUrl = `https://apis.ccbp.in/restaurants-list?offset=${offset}&limit=${LIMIT}&sort_by_rating=${activeOption}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(restaurantListUrl, options)
    if (response.ok === true) {
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
      <PaginationContainer>
        <NavigationButton
          type="button"
          onClick={this.previousPage}
          data-testid="pagination-left-button"
        >
          <GrFormPrevious />
        </NavigationButton>
        <PageIndicator data-testid="active-page-number">
          {activePageNumber} of {Math.ceil(totalNumberOfRestaurants / 9)}
        </PageIndicator>
        <NavigationButton
          type="button"
          onClick={this.nextPage}
          data-testid="pagination-right-button"
        >
          <GrFormNext />
        </NavigationButton>
      </PaginationContainer>
    )
  }

  renderRestaurantsListView = () => {
    const {restaurantList} = this.state
    return (
      <>
        <RestaurantListContainer>
          <PopularHeading>Popular Restaurants</PopularHeading>
          {this.renderFilter()}
          <RestaurantList data-testid="restaurants-list-loader">
            {restaurantList.map(restaurant => (
              <RestaurantItem
                restaurantDetails={restaurant}
                key={restaurant.id}
              />
            ))}
          </RestaurantList>
        </RestaurantListContainer>
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
        return <FailureView />
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {offers} = this.state
    return (
      <>
        <Header />
        <HomeBodyContainer>
          <Banner offers={offers} />
          {this.renderApiView()}
        </HomeBodyContainer>
        <Footer />
      </>
    )
  }
}
export default Home
