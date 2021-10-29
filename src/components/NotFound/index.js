import './index.css'

import notFoundViewImage from '../Img/NotFound/notFoundViewImage.png'

const NotFound = props => {
  const redirectToHome = () => {
    const {history} = props
    history.replace('/')
  }

  return (
    <div className="not-found-container">
      <div className="not-found-view">
        <img
          className="not-found-image"
          src={notFoundViewImage}
          alt="not found"
        />
        <h1 className="not-found-heading">Page Not Found</h1>
        <p className="not-found-text">
          we are sorry, the page you requested could not be found Please go back
          to the homepage
        </p>
        <div className="home-button-container">
          <button
            className="home-button"
            type="button"
            onClick={redirectToHome}
          >
            Home Page
          </button>
        </div>
      </div>
    </div>
  )
}
export default NotFound
