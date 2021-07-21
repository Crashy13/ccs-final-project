import React from 'react';
import {Button, Modal} from 'react-bootstrap';
import Cookies from 'js-cookie';
import ReviewDetails from './ReviewDetails';

class GameReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.game,
      reviews: [],
      show: false,
      isEditing: false,
    }

  this.handleShow = this.handleShow.bind(this);
  this.handleClose = this.handleClose.bind(this);
  this.deleteReview = this.deleteReview.bind(this);
  this.editReview = this.editReview.bind(this);

}

  handleShow() {
    this.setState({show:true})
  }

  handleClose() {
    this.setState({show:false})
  }

  componentDidMount() {
    fetch(`/api/v1/reviews/games/?game=${this.state.name}`)
      .then(response => {
        if(!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => this.setState({reviews:data}))
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error)
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
      <Button className="collection-button" variant="primary" onClick={this.handleShow}>
        See Reviews
      </Button>
      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closebutton>
          <Modal.Title className="review-title">Reviews</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <p>{reviews}</p>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
      </>
    )
  }
}


export default GameReviews
