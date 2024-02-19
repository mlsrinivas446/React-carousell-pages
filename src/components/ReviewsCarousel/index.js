import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  moveRight = () => {
    const {index} = this.state
    const {reviewsList} = this.props
    if (index < reviewsList.length - 1) {
      this.setState(prevState => ({index: prevState.index + 1}))
    } else {
      this.setState({index: reviewsList.length - 1})
    }
  }

  moveLeft = () => {
    const {index} = this.state

    if (index > 0) {
      this.setState(prevState => ({index: prevState.index - 1}))
    } else {
      this.setState({index: 0})
    }
  }

  getUserPage = review => {
    const {imgUrl, username, companyName, description} = review
    return (
      <div className="profile-details">
        <img src={imgUrl} alt={username} className="profile-img" />
        <p className="profile-name">{username}</p>
        <p className="profile-company-name">{companyName}</p>
        <p className="profile-description">{description}</p>
      </div>
    )
  }

  render() {
    const {reviewsList} = this.props
    const {index} = this.state

    const resultPage = reviewsList[index]

    return (
      <div className="container">
        <h1 className="heading">Reviews</h1>
        <div className="profile-card-container">
          <button
            className="button"
            onClick={this.moveLeft}
            type="button"
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              className="arrow"
              alt="left arrow"
            />
          </button>

          {this.getUserPage(resultPage)}

          <button
            className="button"
            onClick={this.moveRight}
            type="button"
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              className="arrow"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
