import styled from 'styled-components'

export const NavHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f8fafc;
  padding: 10px 30px 10px 30px;
  @media screen and (min-width: 576px) {
    padding: 15px 80px 15px 80px;
  }
  @media screen and (min-width: 962px) {
    padding: 15px 140px 15px 140px;
  }
`
export const HeaderWebLogo = styled.img`
  width: 39px;
  height: 32px;
  @media screen and (min-width: 576px) {
    width: 49px;
    height: 39px;
  }
`
export const HeaderHeading = styled.h1`
  font-family: DM Sans;
  font-size: 16px;
  font-style: italic;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  color: #f7931e;
  margin-left: 10px;
  @media screen and (min-width: 576px) {
    font-size: 18px;
    font-weight: 400;
  }
`
export const HeaderLogoContainer = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
`
export const MobileMenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px 10px 30px;
  margin-top: 20px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`
export const MobileOptionsContainer = styled.div`
  display: flex;
  align-items: center;
`
export const LargeScreenOptionsContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 576px) {
    display: none;
  }
`
export const LogoutButton = styled.button`
  height: 32px;
  border-radius: 8px;
  border: none;
  padding: 8px, 16px, 8px, 16px;
  background-color: #f7931e;
  color: #fff;
  font-family: 'Inter';
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  cursor: pointer;
`
