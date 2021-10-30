import {Component} from 'react'
import Slider from 'react-slick'
import './index.css'

class Banner extends Component {
  render() {
    const {offers} = this.props
    const settings = {
      dots: true,
      autoplay: true,
      autoplaySpeed: 3000,
    }
    return (
      <div
        className="restaurants-offer-loader"
        testid="restaurants-offers-loader"
      >
        <Slider {...settings}>
          {offers.map(offer => (
            <div key={offer.id} className="image-container">
              <img src={offer.imageUrl} alt="offer" className="slider-image" />
            </div>
          ))}
        </Slider>
      </div>
    )
  }
}
export default Banner
