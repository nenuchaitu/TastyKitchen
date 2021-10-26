import {Component} from 'react'

import {
  ProfileContainer,
  ProfilePicContainer,
  ProfileButton,
} from './StyledComponents'

class Profile extends Component {
  render() {
    return (
      <ProfileContainer>
        <ProfilePicContainer>
          <ProfileButton>Hello</ProfileButton>
        </ProfilePicContainer>
      </ProfileContainer>
    )
  }
}

export default Profile
