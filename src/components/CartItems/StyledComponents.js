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
  width: 50%;
`
export const CartItemImage = styled.img`
  width: 136px;
  height: 100px;
`
export const CartItemName = styled.p`
  font-family: DM Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.2;
  text-align: left;
  margin-left: 16px;
`
export const CartItemCostAndCounterContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 60px;
`
export const ItemCost = styled.p`
  font-family: DM Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  color: #ffa412;
`
