import styled from 'styled-components'

export const FoodItemDetailsCard = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  margin-left: 24px;
  @media screen and (min-width: 577px) {
    width: 375px;
    margin-left: 0px;
  }
`
export const FoodItemImage = styled.img`
  height: 100px;
  width: 160px;
  border-radius: 8px;
  margin-top: 24px;
  @media screen and (min-width: 577px) {
    height: 150px;
    width: 255px;
    margin-top: 32px;
  }
`
export const FoodItemTextDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  @media screen and (min-width: 577px) {
    margin-left: 30px;
  }
`
export const FoodItemName = styled.h1`
  font-family: 'DM Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.20000000298023224px;
  text-align: left;
  @media screen and (min-width: 577px) {
    font-size: 16px;
    line-height: 24px;
  }
`
export const FoodCostContainer = styled.div`
  display: flex;
  align-items: center;
  color: #334155;
`
export const FoodPriceText = styled.p`
  font-family: DM Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: left;
  @media screen and (min-width: 577px) {
    font-size: 16px;
    line-height: 24px;
  }
`
export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
`
export const RatingValue = styled.p`
  font-family: DM Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
  @media screen and (min-width: 577px) {
    font-size: 16px;
    line-height: 24px;
  }
`
