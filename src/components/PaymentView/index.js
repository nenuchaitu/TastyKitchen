import {withRouter} from 'react-router-dom'

import success from '../Img/PaymentView/success.png'

import {
  PaymentSuccessContainer,
  PaymentSuccessImage,
  PaymentSuccessHeading,
  PaymentSuccessText,
  GoHomeButton,
} from './StyledComponents'

const PaymentView = props => {
  const redirectToHome = () => {
    const {history, setPaymentStatus} = props
    history.replace('/')
    setPaymentStatus()
  }

  return (
    <PaymentSuccessContainer>
      <PaymentSuccessImage src={success} alt="success" />
      <PaymentSuccessHeading>Payment Successful</PaymentSuccessHeading>
      <PaymentSuccessText>
        Thank you for ordering Your payment is successfully completed.
      </PaymentSuccessText>
      <GoHomeButton type="button" onClick={redirectToHome}>
        Go To Home Page
      </GoHomeButton>
    </PaymentSuccessContainer>
  )
}
export default withRouter(PaymentView)
