import {Component} from 'react'

import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import {GiHamburgerMenu} from 'react-icons/gi'

import {AiFillCloseCircle} from 'react-icons/ai'

import './index.css'

import WebsiteLogo from '../Img/Login/WebsiteLogo.png'

import {
  NavHeader,
  HeaderWebLogo,
  HeaderHeading,
  HeaderLogoContainer,
  MobileMenuContainer,
  MobileOptionsContainer,
  LargeScreenOptionsContainer,
  LogoutButton,
  NavMenUButton,
} from './StyledComponents'

const menuOptions = [
  {option: 'Home', id: 'HOME', to: '/'},
  {option: 'Cart', id: 'CART', to: '/cart'},
  {option: 'Profile', id: 'PROFILE', to: '/profile'},
]

class Header extends Component {
  state = {openMenu: false, activeOption: menuOptions[0].id}

  onClickLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  setActiveOptionId = id => {
    this.setState({activeOption: id})
  }

  renderMobileMenu = () => {
    const {activeOption} = this.state
    return (
      <MobileMenuContainer>
        <MobileOptionsContainer>
          {menuOptions.map(option => (
            <Link key={option.id} to={option.to} className="link-item">
              <NavMenUButton
                type="button"
                selected={activeOption === option.id}
                onClick={() => {
                  this.setActiveOptionId(option.id)
                }}
              >
                {option.option}
              </NavMenUButton>
            </Link>
          ))}
          <LogoutButton type="button" onClick={this.onClickLogout}>
            Logout
          </LogoutButton>
        </MobileOptionsContainer>
        <AiFillCloseCircle
          className="close-button"
          onClick={() => {
            this.setState({openMenu: false})
          }}
        />
      </MobileMenuContainer>
    )
  }

  render() {
    const {openMenu, activeOption} = this.state

    return (
      <>
        <NavHeader>
          <Link to="/" className="link-item">
            <HeaderLogoContainer>
              <HeaderWebLogo src={WebsiteLogo} alt="website logo" />
              <HeaderHeading>Tasty Kitchens</HeaderHeading>
            </HeaderLogoContainer>
          </Link>
          <GiHamburgerMenu
            onClick={() => {
              this.setState(prevState => ({openMenu: !prevState.openMenu}))
            }}
            className="ham-menu"
          />
          <LargeScreenOptionsContainer>
            {menuOptions.map(option => (
              <Link key={option.id} to={option.to} className="link-item">
                <NavMenUButton
                  type="button"
                  selected={activeOption === option.id}
                  onClick={() => {
                    this.setActiveOptionId(option.id)
                  }}
                >
                  {option.option}
                </NavMenUButton>
              </Link>
            ))}
            <LogoutButton type="button" onClick={this.onClickLogout}>
              Logout
            </LogoutButton>
          </LargeScreenOptionsContainer>
        </NavHeader>
        {openMenu ? this.renderMobileMenu() : ''}
      </>
    )
  }
}
export default withRouter(Header)
