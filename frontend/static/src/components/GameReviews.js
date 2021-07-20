import React from 'react';
import {Button, Modal} from 'react-bootstrap';

class GameReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      reviews: [],
      show: false,
    }

  this.handleShow = this.handleShow.bind(this);
  this.handleClose = this.handleClose.bind(this);

}

handleShow() {
  this.setState({show:true})
}

handleClose() {
  this.setState({show:false})
}

  componentDidMount() {
    fetch(`/api/v1/reviews/games/?game=${this.state.game}`)
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

  render() {
    const reviews = this.state.reviews.map(review => (
      <li key={review.id}>
        <h3>{review.title}</h3>
        <p>By: {review.author}</p>
        <p>{review.body}</p>
        <p>Rating: {review.rating}</p>
      </li>
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
