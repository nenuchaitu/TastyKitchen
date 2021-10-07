import {ErrorViewContainer, FailureImage, RetryButton} from './StyledComponents'

const FailureView = props => {
  const {retryApiCall} = props

  const onClickRetry = () => {
    retryApiCall()
  }

  return (
    <>
      <ErrorViewContainer>
        <FailureImage
          src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
          alt="data fetch failure"
        />
        <RetryButton type="button" onClick={onClickRetry}>
          Retry
        </RetryButton>
      </ErrorViewContainer>
    </>
  )
}
export default FailureView
