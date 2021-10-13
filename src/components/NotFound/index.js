import {Redirect} from 'react-router-dom'

import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundText,
  HomeButton,
  NotFoundView,
} from './StyledComponents'

import notFoundViewImage from '../Img/NotFound/notFoundViewImage.png'

const NotFound = () => (
  <NotFoundContainer>
    <NotFoundView>
      <NotFoundImage src={notFoundViewImage} alt="not found" />
      <NotFoundHeading>Page Not Found</NotFoundHeading>
      <NotFoundText>
        we are sorry, the page you requested could not be found Please go back
        to the homepage
      </NotFoundText>
      <HomeButton type="button" onClick={() => <Redirect to="/" />}>
        Home Page
      </HomeButton>
    </NotFoundView>
  </NotFoundContainer>
)
export default NotFound
