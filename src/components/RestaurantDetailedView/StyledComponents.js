import styled from 'styled-components'

export const LoadingViewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
`
export const RestaurantDetailsContainer = styled.div`
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 577px) {
    margin-top: 48px;
  }
`
export const RestaurantBannerContainer = styled.div`
  width: 100%;
  display: flex;
  height: 200px;
  background-color: #333333;
  overflow: hidden;
  @media screen and (min-width: 577px) {
    height: 350px;
    padding-left: 85px;
    padding-right: 85px;
  }
  @media screen and (min-width: 772px) {
    padding-left: 165px;
    padding-right: 165px;
  }
`
export const RestaurantBannerImage = styled.img`
  height: 221px;
  width: 221px;
  margin-left: -68px;
  margin-top: -54px;
  border-radius: 133.9812469482422px;
  @media screen and (min-width: 577px) {
    height: 280px;
    width: 445px;
    left: 165px;
    margin-top: 32px;
    border-radius: 8px;
    margin-bottom: 32px;
  }
`
export const RestaurantTextDetailsContainer = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 16px;
  @media screen and (min-width: 577px) {
    margin-left: 30px;
    margin-top: 32px;
    margin-bottom: 32px;
  }
`
export const RestaurantName = styled.h1`
  font-family: 'Roboto';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.2px;
  text-align: left;
  margin-top: -8px;
  color: #fff;
  @media screen and (min-width: 577px) {
    font-size: 36px;
    line-height: 48px;
  }
`
export const CuisineType = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: left;
  margin-top: -8px;
  color: #fff;
  @media screen and (min-width: 577px) {
    font-size: 16px;
    line-height: 24px;
  }
`
export const Address = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0px;
  margin-top: -8px;
  text-align: left;
  color: #fff;
  @media screen and (min-width: 577px) {
    font-size: 16px;
    line-height: 24px;
  }
`
export const RatingAndCostContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
export const ReviewOrCostContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ValueContainer = styled.div`
  display: flex;
  align-items: center;
`
export const ValueText = styled.p`
  font-family: 'DM Sans';
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: left;
  color: #fff;
  margin-left: 7px;
  @media screen and (min-width: 577px) {
    font-size: 12px;
  }
`

export const ForText = styled.p`
  font-family: 'DM Sans';
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: left;
  color: #e2e8f0;
  margin-top: -5px;
  @media screen and (min-width: 577px) {
    font-size: 12px;
  }
`
export const VerticalLine = styled.p`
  color: #e2e8f0;
  line-height: 40px;
  margin-left: 20px;
  margin-right: 20px;
  @media screen and (min-width: 577px) {
    line-height: 60px;
    font-size: 30px;
    margin-left: 30px;
    margin-right: 30px;
  }
`
export const FoodItemCardsList = styled.ul`
  padding-left: 0px;
  margin-left: 0px;
  list-style: none;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-left: 32px;
  padding-right: 32px;
  margin-bottom: 40px;
  @media screen and (min-width: 577px) {
    padding-left: 85px;
    padding-right: 85px;
    margin-bottom: 80px;
  }
  @media screen and (min-width: 772px) {
    padding-left: 165px;
    padding-right: 165px;
  }
`
