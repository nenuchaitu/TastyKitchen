import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NotFoundView = styled.div`
  width: 80%;
  max-width: 530px;
`
export const NotFoundImage = styled.img`
  width: 140px;
  height: 155px;
  @media screen and (min-width: 577px) {
    width: 425px;
    height: 367px;
  }
`
export const NotFoundHeading = styled.h1`
  color: #1e293b;
  font-family: 'DM Sans';
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: center;
  @media screen and (min-width: 577px) {
    font-size: 32px;
    line-height: 48px;
  }
`
export const NotFoundText = styled.p`
  color: #475569;
  font-family: 'DM Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
  @media screen and (min-width: 577px) {
    font-size: 16px;
    line-height: 24px;
  }
`
export const HomeButton = styled.button`
  background-color: #f7931e;
  color: #ffffff;
  height: 32px;
  width: 98px;
  border-radius: 8px;
  padding: 8px, 16px, 8px, 16px;
  @media screen and (min-width: 577px) {
    width: 123px;
    height: 48px;
    padding: 12px, 24px, 12px, 24px;
  }
`
