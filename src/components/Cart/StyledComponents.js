import styled from 'styled-components'

export const CartViewContainer = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const EmptyCartContainer = styled.div`
  width: 80%;
  max-width: 450px;
  margin-bottom: 40px;
  @media screen and (min-width: 577px) {
    margin-bottom: 96px;
  }
`
export const NoOrdersImage = styled.img`
  width: 204px;
  height: 175px;
  @media screen and (min-width: 577px) {
    width: 425px;
    height: 367px;
  }
`
export const NoOrdersHeading = styled.h1`
  font-family: 'DM Sans';
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: center;
  @media screen and (min-width: 577px) {
    font-size: 32px;
    line-height: 48px;
  }
`
export const NoOrdersText = styled.p`
  font-family: 'DM Sans';
  font-size: 14px;
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
export const OrderNowButton = styled.button`
  background-color: #f7931e;
  color: #ffffff;
  height: 32px;
  width: 93px;
  left: 0px;
  top: 0px;
  border-radius: 8px;
  padding: 8px, 16px, 8px, 16px;
  border: none;
  cursor: pointer;
`
export const OrderNowButtonContainer = styled.div`
  text-align: center;
`
