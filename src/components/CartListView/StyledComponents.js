import styled from 'styled-components'

export const CartListContainerLarge = styled.div`
  background-color: #f9fbfe;
  border: 1px solid #0b69ff1a;
  margin-top: 48px;
  margin-bottom: 64px;
  padding: 38px 0px 48px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  overflow: hidden;
  @media screen and (max-width: 577px) {
    display: none;
  }
`
export const CartListContainerMobile = styled.div`
  margin-top: 8px;
  margin-bottom: 24px;
  padding-left: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media screen and (min-width: 577px) {
    display: none;
  }
`
export const CartIndexContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;
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
  margin-left: 48px;
  margin-bottom: 24px;
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
