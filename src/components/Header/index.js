import {useState} from 'react'

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

const Header = props => {
  const [openMenu, setOpenMenu] = useState(false)
  const [activeOption, setActiveMenu] = useState(menuOptions[0].id)

  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  const renderMobileMenu = () => (
    <MobileMenuContainer>
      <MobileOptionsContainer>
        {menuOptions.map(option => (
          <Link key={option.id} to={option.to}>
            <NavMenUButton
              type="button"
              className={
                activeOption === option.id
                  ? 'link-item-mobile selected'
                  : 'link-item-mobile'
              }
              onClick={() => {
                setActiveMenu(option.id)
              }}
            >
              {option.option}
            </NavMenUButton>
          </Link>
        ))}
        <LogoutButton type="button" onClick={onClickLogout}>
          Logout
        </LogoutButton>
      </MobileOptionsContainer>
      <AiFillCloseCircle
        className="close-button"
        onClick={() => {
          setOpenMenu(false)
        }}
      />
    </MobileMenuContainer>
  )

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
            setOpenMenu(!openMenu)
          }}
          className="ham-menu"
        />
        <LargeScreenOptionsContainer>
          {menuOptions.map(option => (
            <Link key={option.id} to={option.to}>
              <NavMenUButton
                type="button"
                className={
                  activeOption === option.id
                    ? 'link-item-large selected'
                    : 'link-item-large'
                }
                onClick={() => {
                  setActiveMenu(option.id)
                }}
              >
                {option.option}
              </NavMenUButton>
            </Link>
          ))}
          <LogoutButton type="button" onClick={onClickLogout}>
            Logout
          </LogoutButton>
        </LargeScreenOptionsContainer>
      </NavHeader>
      {openMenu ? renderMobileMenu() : ''}
    </>
  )
}
export default withRouter(Header)
