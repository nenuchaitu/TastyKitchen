import styled from 'styled-components'

export const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  min-height: 100vh;
  background-color: #fefeff;
  @media screen and (min-width: 576px) {
    flex-direction: row;
  }
`
export const LoginFormContainer = styled.div`
  width: 100%;
  @media screen and (min-width: 576px) {
    width: 55%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
export const ImageContainer = styled.div`
  text-align: right;
  @media screen and (min-width: 576px) {
    display: none;
  }
`
export const LargeScreenImageContainer = styled.div`
  width: 45%;
  @media screen and (max-width: 577px) {
    display: none;
  }
`
export const MobileImage = styled.img`
  height: 327px;
  width: 327px;
  margin-left: 56px;
  margin-top: -38px;
  @media screen and (max-width: 360px) {
    height: 287px;
    width: 287px;
  }
`
export const LargeScreenImage = styled.img`
  height: 100vh;
  width: 100%;
`
