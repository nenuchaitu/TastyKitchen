import styled from 'styled-components'

export const ProfileContainer = styled.div`
  min-height: 100vh;
  background-image: url('../Img/Profile/MobileBackground.jpg');
  @media screen and (min-width: 577px) {
    background-image: url('../Img/Profile/Largebaackground.jpg');
  }
  background-size: cover;
`
export const ProfilePicContainer = styled.div`
  width: 350px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.5s;
  :hover img {
    transform: scale(1.5);
  }
`
export const ProfileButton = styled.button`
  height: 140px;
  width: 140px;
  border-radius: 50%;
  background-color: #8b9199;
  outline: none;
  border: none;
`
