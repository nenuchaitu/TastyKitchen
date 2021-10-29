import {Link} from 'react-router-dom'

import success from '../Img/PaymentView/success.png'

import './index.css'

const PaymentView = () => (
  <div className="payment-success-container">
    <img className="payment-success-image" src={success} alt="success" />
    <h1 className="payment-success-heading">Payment Successful</h1>
    <p className="payment-success-text">
      Thank you for ordering Your payment is successfully completed.
    </p>
    <Link to="/">
      <button className="go-home-button" type="button">
        Go To Home Page
      </button>
    </Link>
  </div>
)

export default PaymentView
