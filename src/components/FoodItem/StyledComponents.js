import styled from 'styled-components'

export const FoodItemDetailsCard = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  max-height: 100px;
  margin-top: 20px;
  margin-bottom: 20px;
  @media screen and (min-width: 577px) {
    width: 405px;
    max-height: 150px;
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
    width: 230px;
    margin-top: 32px;
  }
`
export const FoodItemTextDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 16px;
  max-height: 100px;
  @media screen and (min-width: 577px) {
    margin-left: 30px;
    max-height: 150px;
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
  margin-top: -21px;
`
export const FoodPriceText = styled.p`
  font-family: 'DM Sans';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 17px;
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
  margin-top: -21px;
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
export const AddButton = styled.button`
  height: 24px;
  width: 43px;
  border-radius: 6;
  font-family: 'Inter';
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 12px;
  letter-spacing: 0em;
  padding: 6px, 12px, 6px, 12px;
  color: #ffa412;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: 1px solid #ffa412;
  border-radius: 4px;
  @media screen and (min-width: 577px) {
    height: 32px;
    width: 58px;
    font-size: 12px;
    line-height: 16px;
    padding: 8px, 16px, 8px, 16px;
    border-radius: 6px;
  }
`
