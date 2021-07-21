import React from 'react'
import Cookies from 'js-cookie'
import ReviewDetails from './ReviewDetails'

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    }

    this.deleteReview = this.deleteReview.bind(this);
    this.editReview = this.editReview.bind(this);
  }

  componentDidMount() {
    fetch('/api/v1/reviews/games/?game=Hades')
      .then(response => {
        if(!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => this.setState({reviews:data}))
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      })
  }

  deleteReview(id) {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
    }
    fetch(`/api/v1/reviews/${id}`, options)
      .then(response => {
        const reviews = [...this.state.reviews];
        const index = reviews.findIndex(review => review.id === id);
        reviews.splice(index, 1);
        this.setState({reviews})
      })
  }

  editReview(review) {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(review)
    }
    fetch(`/api/v1/reviews/${review.id}`, options)
      .then(response => response.json())
      .then(data => {
        const reviews = [...this.state.reviews];
        const index = reviews.findIndex(review => review.id === review);
        reviews[index] = data;
        this.setState({reviews})
      });
  }

  render() {
    const reviews = this.state.reviews.map(review => (
      <ReviewDetails key={review.id} review={review} deleteReview={this.deleteReview} editReview={this.editReview} />
    ))
    return(
      <>
        <h3>Reviews</h3>
          <ul>{reviews}</ul>
      </>
    )
  }
}

export default Reviews
