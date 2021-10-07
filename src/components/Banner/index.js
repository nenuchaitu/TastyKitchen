import {Component} from 'react'
import Slider from 'react-slick'

import {
  ImageContainer,
  SliderImage,
  RestaurantsOffersLoader,
} from './StyledComponents'

class Banner extends Component {
  render() {
    const {offers} = this.props
    const settings = {
      dots: true,
      autoplay: true,
      autoplaySpeed: 3000,
    }
    return (
      <RestaurantsOffersLoader data-testid="restaurants-offers-loader">
        <Slider {...settings}>
          {offers.map(offer => (
            <ImageContainer key={offer.id}>
              <SliderImage src={offer.imageUrl} alt="offer" />
            </ImageContainer>
          ))}
        </Slider>
      </RestaurantsOffersLoader>
    )
  }
}
export default Banner
