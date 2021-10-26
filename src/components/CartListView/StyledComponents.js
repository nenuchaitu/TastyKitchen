import styled from 'styled-components'

export const CartListContainerLarge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    background-color: #f9fbfe;
    border: 1px solid #0b69ff1a;
    margin-top: 48px;
    margin-bottom: 64px;
    padding: 38px 0px 48px 0px;
  }
`
export const CartIndexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 75%;
  align-items: center;
  flex: 1 1 auto;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const CartIndexHeading = styled.h1`
  font-family: 'DM Sans';
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.2;
  text-align: left;
`
export const CartHorizontalLine = styled.hr`
  border: 1px dotted #cbd2d9;
  width: 95%;
  @media screen and (min-width: 577px) {
    margin-left: 48px;
    margin-bottom: 24px;
  }
`
export const OrderTotalContainer = styled.div`
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const CartItemsList = styled.ul`
  width: 85%;
  margin-left: 0px;
  padding-left: 0px;
  list-style: none;
`
export const PlaceOrderButtonContainer = styled.div`
  margin-left: auto;
  margin-top: 24px;
  margin-bottom: 48px;
  @media screen and (min-width: 577px) {
    margin-top: 32px;
    margin-right: 60px;
  }
`

export const CartPlaceOrderButton = styled.button`
  height: 32px;
  width: 99px;
  border-radius: 8px;
  padding: 8px, 16px, 8px, 16px;
  border: none;
  cursor: pointer;
  outline: none;
  background-color: #f7931e;
  color: #ffffff;
  font-family: DM Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
`
