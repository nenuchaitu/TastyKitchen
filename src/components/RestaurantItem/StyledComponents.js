import styled from 'styled-components'

export const RestaurantListItem = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  margin-top: 24px;
  width: 320px;
  cursor: pointer;
  @media screen and (min-width: 576px) {
    margin-top: 32px;
  }
`
export const RestaurantImage = styled.img`
  height: 100px;
  width: 160px;
  border-radius: 8px;
`
export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  justify-content: flex-start;
  align-items: flex-start;
  max-height: 100px;
  max-width: 174px;
`
export const RestaurantName = styled.h1`
  color: #334155;
  font-family: DM Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  margin-top: -3px;
  margin-bottom: -10px;
  @media screen and (min-width: 576px) {
    font-size: 18px;
  }
`
export const CuisineType = styled.p`
  color: #64748b;
  font-family: DM Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  margin-bottom: -10px;
  line- @media screen and (min-width: 576px) {
    font-size: 12px;
  }
`
export const RestaurantItemRatingContainer = styled.div`
  display: flex;
  align-items: center;
`
export const RestaurantItemRating = styled.p`
  color: #1e293b;
  font-family: DM Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  text-align: left;
`
