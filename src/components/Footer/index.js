import {
  FaPinterestSquare,
  FaInstagram,
  FaTwitter,
  FaFacebookSquare,
} from 'react-icons/fa'

import WebFooterLogo from '../Img/Footer/WebFooterLogo.png'

import './index.css'

const Footer = () => (
  <div className="footer-container">
    <div className="footer-logo-container">
      <img
        className="footer-logo"
        src={WebFooterLogo}
        alt="website-footer-logo"
      />
      <h1 className="footer-logo-text">Tasty Kitchens</h1>
    </div>
    <p className="footer-tag-line">
      The only thing we are serious about is food. Contact us on
    </p>
    <div className="social-media-icons-container">
      <FaPinterestSquare className="icons" data-testid="pintrest-social-icon" />
      <FaInstagram
        className="icons icons-spacing"
        data-testid="instagram-social-icon"
      />
      <FaTwitter
        className="icons icons-spacing"
        data-testid="twitter-social-icon"
      />
      <FaFacebookSquare
        className="icons icons-spacing"
        data-testid="facebook-social-icon"
      />
    </div>
  </div>
)
export default Footer
