import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import LoginPageLargeScreenImage from '../Img/Login/LoginPageLargeScreenImage.png'
import LoginPageSmallScreenImage from '../Img/Login/LoginPageSmallScreenImage.png'
import LoginForm from '../LoginForm'

import './index.css'

class Login extends Component {
  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="login-page-container">
        <div className="login-form-container">
          <div className="image-container">
            <img
              className="mobile-image "
              src={LoginPageSmallScreenImage}
              alt="website login"
            />
          </div>
          <LoginForm />
        </div>
        <div className="large-screen-image-container">
          <img
            alt="website login"
            className="large-screen-image"
            src={LoginPageLargeScreenImage}
          />
        </div>
      </div>
    )
  }
}
export default Login
