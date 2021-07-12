import React from 'react'
import Cookies from 'js-cookie'
import ReviewDetails from './ReviewDetails'
import ReviewSubmit from './ReviewSubmit'
import {Link} from 'react-router-dom'

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
    fetch('/api/v1/reviews/')
      .then(response => {
        if(!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => this.setState({reviews:data})).catch(error => {
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
        const index = reviews.findIndex(body => body.id === review.id);
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
        <ul>
        <Link className="create-review-link" to="/submitreview">Click To Add New Review</Link>
        <section className="rating_scale">
          <p>Rating Scale:</p>
          <p>5- Awesome. Highly recommend.</p>
          <p>4- Fun. Recommend but not a go and get now.</p>
          <p>3- It was ok. Good but ok if you miss it.</p>
          <p>2- Can't recommend. Didn't really enjoy it. Not for me, but could see others maybe liking it.</p>
          <p>1- Garbage. Not even worth a try.</p>
        </section>
        <p>{reviews}</p>
        </ul>
      </>
    )
  }
}

export default Reviews
