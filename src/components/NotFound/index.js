import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundText,
  HomeButton,
  NotFoundView,
  HomeButtonContainer,
} from './StyledComponents'

import notFoundViewImage from '../Img/NotFound/notFoundViewImage.png'

const NotFound = props => {
  const redirectToHome = () => {
    const {history} = props
    history.replace('/')
  }

  return (
    <NotFoundContainer>
      <NotFoundView>
        <NotFoundImage src={notFoundViewImage} alt="not found" />
        <NotFoundHeading>Page Not Found</NotFoundHeading>
        <NotFoundText>
          we are sorry, the page you requested could not be found Please go back
          to the homepage
        </NotFoundText>
        <HomeButtonContainer>
          <HomeButton type="button" onClick={redirectToHome}>
            Home Page
          </HomeButton>
        </HomeButtonContainer>
      </NotFoundView>
    </NotFoundContainer>
  )
}
export default NotFound
