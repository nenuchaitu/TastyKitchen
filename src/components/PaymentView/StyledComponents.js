import styled from 'styled-components'

export const PaymentSuccessContainer = styled.div`
  align-self: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 546px;
  padding: 53px 21px 56px 21px;
  @media screen and (min-width: 577px) {
    padding: 53px 120px 56px 120px;
  }
`
export const PaymentSuccessImage = styled.img`
  height: 39px;
  width: 39px;
  @media screen and (min-width: 577px) {
    height: 64px;
    width: 64px;
  }
`
export const PaymentSuccessHeading = styled.h1`
  font-family: 'DM Sans';
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
  color: #1e293b;
  @media screen and (min-width: 577px) {
    font-size: 24px;
    line-height: 32px;
  }
`
export const PaymentSuccessText = styled.p`
  font-family: 'DM Sans';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
  color: #64748b;
  @media screen and (min-width: 577px) {
    font-size: 16px;
    line-height: 24px;
  }
`

export const GoHomeButton = styled.button`
  background-color: #f7931e;
  color: #ffffff;
  height: 32px;
  width: 131px;
  border-radius: 8px;
  padding: 8px, 16px, 8px, 16px;
  border: none;
  cursor: pointer;
  font-family: 'DM Sans';
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
  margin-top: 32px;
`
