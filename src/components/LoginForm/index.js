import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {useState} from 'react'
import WebsiteLogo from '../Img/Login/WebsiteLogo.png'

import './index.css'

const LoginForm = props => {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [submitError, setSubmitError] = useState(false)
  const [errorMessage, setErrorMessage] = useState()

  const renderUsername = () => (
    <div className="input-container">
      <label className="input-label" htmlFor="username">
        USERNAME
      </label>
      <input
        className="input-field"
        type="text"
        id="username"
        value={username}
        onChange={event => {
          setUsername(event.target.value)
        }}
        placeholder="Username"
      />
    </div>
  )

  const renderPassword = () => (
    <div className="input-container">
      <label className="input-label" htmlFor="password">
        PASSWORD
      </label>
      <input
        className="input-field"
        type="password"
        id="password"
        value={password}
        onChange={event => {
          setPassword(event.target.value)
        }}
        placeholder="password"
      />
    </div>
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
    try {
      const response = await fetch(url, options)
      const data = await response.json()
      if (response.ok === true) {
        onSubmitSuccess(data.jwt_token)
      } else {
        onSubmitFailure(data.error_msg)
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <form className="login-form" onSubmit={submitForm}>
      <div className="logo-container">
        <img className="login-web-logo" src={WebsiteLogo} alt="website logo" />
        <h1 className="form-heading-logo">Tasty Kitchens</h1>
      </div>
      <h1 className="login-heading">Login</h1>
      {renderUsername()}
      {renderPassword()}
      {submitError ? <p className="error-message">{errorMessage}</p> : ''}
      <button className="login-button" type="submit">
        Login
      </button>
    </form>
  )
}
export default withRouter(LoginForm)
