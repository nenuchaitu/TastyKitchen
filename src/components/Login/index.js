import LoginPageLargeScreenImage from '../Img/Login/LoginPageLargeScreenImage.png'
import LoginPageSmallScreenImage from '../Img/Login/LoginPageSmallScreenImage.png'
import LoginForm from '../LoginForm'
import {
  LoginPageContainer,
  LoginFormContainer,
  LargeScreenImageContainer,
  ImageContainer,
  MobileImage,
  LargeScreenImage,
} from './StyledComponents'

const Login = () => (
  <LoginPageContainer>
    <LoginFormContainer>
      <ImageContainer>
        <MobileImage src={LoginPageSmallScreenImage} alt="website login" />
      </ImageContainer>
      <LoginForm />
    </LoginFormContainer>
    <LargeScreenImageContainer>
      <LargeScreenImage src={LoginPageLargeScreenImage} alt="website login" />
    </LargeScreenImageContainer>
  </LoginPageContainer>
)

export default Login
