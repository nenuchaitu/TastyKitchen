import styled from 'styled-components'

export const CartListItem = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  margin-left: 0px;
`
export const ImageItemContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
`
export const CartItemImage = styled.img`
  min-width: 136px;
  max-width: 150px;
  max-height: 136px;
`
export const CartItemName = styled.p`
  font-family: 'DM Sans';
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.2;
  text-align: left;
  margin-left: 16px;
`
export const CartNameContainer = styled.div``
export const CartItemCostAndCounterContainer = styled.div`
  width: 47%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 60px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const CartItemCostAndCounterMobileContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-left: 24px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const ItemCost = styled.p`
  font-family: 'DM Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  color: #ffa412;
`
