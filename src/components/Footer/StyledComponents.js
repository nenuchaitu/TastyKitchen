import styled from 'styled-components'

export const FooterContainer = styled.div`
  background-color: #0f172a;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`
export const FooterLogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 52px;
  @media screen and (min-width: 577px) {
    margin-top: 96px;
  }
`

export const FooterLogo = styled.img`
  height: 37px;
  width: 30px;
  @media screen and (min-width: 577px) {
    height: 39px;
    width: 49px;
  }
`
export const FooterLogoText = styled.h1`
  font-family: DM Sans;
  font-size: 20px;
  font-style: italic;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  margin-left: 10px;
  color: #ffffff;

  @media screen and (min-width: 577px) {
    font-size: 32px;
    line-height: 48px;
  }
`
export const FooterTagLine = styled.p`
  font-family: DM Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  @media screen and (min-width: 577px) {
    font-size: 24px;
    line-height: 32px;
  }
`
export const FooterTagSpan = styled.span`
  @media screen and (min-width: 577px) {
    display: none;
  }
`
export const SocialMediaIconsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 52px;
  @media screen and (min-width: 577px) {
    margin-bottom: 96px;
  }
`
