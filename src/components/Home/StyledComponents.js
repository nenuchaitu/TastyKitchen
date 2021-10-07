import styled from 'styled-components'

export const HomeBodyContainer = styled.div`
  background-color: #ffffff;
  padding: 10px 0px 10px 0px;
  @media screen and (min-width: 576px) {
    padding: 15px 80px 15px 80px;
  }
  @media screen and (min-width: 962px) {
    padding: 15px 140px 15px 140px;
  }
`
export const RestaurantListContainer = styled.div`
  padding: 10px 30px 10px 30px;
  @media screen and (min-width: 576px) {
    padding: 10px 0px 10px 0px;
  }
`

export const PopularHeading = styled.h1`
font-size: 24px;
font-weight: 700;
line-height: 32px;
font-family: DM Sans;
font-style: normal;
letter-spacing: 0px;
text-align: left;
@media screen and (min-width:576px){
font-size: 32px;
line-height: 48px;`

export const FilterContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:flex-start;
@media screen and (min-width:577px){
    flex-direction:row;
    justify-content:space-between;`

export const TagLine = styled.p`
  font-family: DM Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  @media screen and (min-width: 577px) {
    font-size: 16px;
  }
`
export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
`
export const SortBy = styled.select`
  margin-left: 15px;
  border: none;
  outline: none;
  width: 150px;
  background-color: none;
`
export const Option = styled.option`
  display: flex;
  justify-content: space-between;
  background-color: ${props =>
    props.isActive ? '#ffffff' : 'Light / blue-gray / 100'};
`
export const LoadingViewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
`
export const RestaurantList = styled.ul`
  margin-left: 0px;
  padding-left: 0px;
  margin-top: 16px;
  list-style: none;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 576px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`
export const Separator = styled.hr`
  width: 100%;
  height: 1px;
  background-color: #1e293b;
  @media screen and (max-width: 576px) {
    display: none;
  }
`
export const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const NavigationButton = styled.button`
  background-color: transparent;
  border: 1px solid #334155;
  padding: 3px;
  outline: none;
  cursor: pointer;
  margin-left: 10px;
  margin-right: 10px;
`
export const PageIndicator = styled.p`
  font-family: Bree Serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  @media screen and (min-width: 577px) {
    font-size: 20px;
  }
`
