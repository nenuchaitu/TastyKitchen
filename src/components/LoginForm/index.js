import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {useState} from 'react'
import WebsiteLogo from '../Img/Login/WebsiteLogo.png'
import {
  Form,
  LoginWebLogo,
  InputContainer,
  InputLabel,
  InputField,
  ErrorMessage,
  LoginButton,
  FormHeading,
  LogoContainer,
  LoginHeading,
} from './StyledComponents'

const LoginForm = props => {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [submitError, setSubmitError] = useState(false)
  const [errorMessage, setErrorMessage] = useState()

  const renderUsername = () => (
    <InputContainer>
      <InputLabel htmlFor="username">USERNAME</InputLabel>
      <InputField
        type="text"
        id="username"
        value={username}
        onChange={event => {
          setUsername(event.target.value)
        }}
        placeholder="Username"
      />
    </InputContainer>
  )

  const renderPassword = () => (
    <InputContainer>
      <InputLabel htmlFor="password">PASSWORD</InputLabel>
      <InputField
        type="password"
        id="password"
        value={password}
        onChange={event => {
          setPassword(event.target.value)
        }}
        placeholder="password"
      />
    </InputContainer>
  )

  const onSubmitSuccess = jwtToken => {
    const {history} = props
    setSubmitError(false)
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  const onSubmitFailure = errMsg => {
    setErrorMessage(errMsg)
    setSubmitError(true)
  }

  const submitForm = async event => {
    event.preventDefault()
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      onSubmitSuccess(data.jwt_token)
    } else {
      onSubmitFailure(data.error_msg)
    }
  }

  return (
    <Form onSubmit={submitForm}>
      <LogoContainer>
        <LoginWebLogo src={WebsiteLogo} alt="website logo" />
        <FormHeading>Tasty Kitchen</FormHeading>
      </LogoContainer>
      <LoginHeading>Login</LoginHeading>
      {renderUsername()}
      {renderPassword()}
      {submitError ? <ErrorMessage>{errorMessage}</ErrorMessage> : ''}
      <LoginButton type="submit">Login</LoginButton>
    </Form>
  )
}
export default withRouter(LoginForm)
