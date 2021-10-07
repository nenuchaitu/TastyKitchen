import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiOutlineInstagram,
} from 'react-icons/ai'
import {FaPinterestSquare} from 'react-icons/fa'

import WebFooterLogo from '../Img/Footer/WebFooterLogo.png'

import {
  FooterLogo,
  FooterContainer,
  FooterLogoContainer,
  FooterLogoText,
  FooterTagLine,
  FooterTagSpan,
  SocialMediaIconsContainer,
} from './StyledComponents'

import './index.css'

const Footer = () => (
  <FooterContainer>
    <FooterLogoContainer>
      <FooterLogo src={WebFooterLogo} alt="website-footer-logo" />
      <FooterLogoText>Tasty Kitchens</FooterLogoText>
    </FooterLogoContainer>
    <FooterTagLine>
      The only thing we are serious about is food.{' '}
      <FooterTagSpan>Contact us on </FooterTagSpan>
    </FooterTagLine>
    <SocialMediaIconsContainer>
      <FaPinterestSquare className="icons" data-testid="pintrest-social-icon" />
      <AiOutlineInstagram
        className="icons icons-spacing"
        data-testid="instagram-social-icon"
      />
      <AiOutlineTwitter
        className="icons icons-spacing"
        data-testid="twitter-social-icon"
      />
      <AiFillFacebook
        className="icons icons-spacing"
        data-testid="facebook-social-icon"
      />
    </SocialMediaIconsContainer>
  </FooterContainer>
)
export default Footer
