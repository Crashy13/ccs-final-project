import React from 'react';
import Cookies from 'js-cookie';
import {withRouter} from 'react-router-dom';
import {Modal, Button} from 'react-bootstrap';

class ReviewSubmit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      title: '',
      author: '',
      body: '',
      rating: parseInt('0'),
      show: false,
    }

    this.addReview = this.addReview.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

  }

  handleShow() {
    this.setState({show:true})
  }

  handleClose() {
    this.setState({show:false})
  }

  handleInput(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  addReview(e) {
    e.preventDefault()
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(this.state),
    }
    fetch('/api/v1/reviews/', options)
      .then(response => {
        if(!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      this.setState({game: '', title: '', body: '', rating: '',})
      this.props.history.push('/profile')
  }
  render() {
    return(
      <>
        <div className="review_container">
          <Button variant="primary" onClick={this.handleShow}>
            Add Review
          </Button>
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closebutton>
              <Modal.Title>Add Your Review Here</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={this.addReview}>

                <input className="review_input" type="text" autoComplete="off" name="title" value={this.state.title} onChange={this.handleInput} placeholder="Title of Review"/>
                <textarea className="review_input" name="body" value={this.state.body} onChange={this.handleInput} id="" cols="30" rows="10" placeholder="Your thoughts"></textarea>
                <input type="text" autoComplete="off" placeholder="Rating 1-5" name="rating" value={this.state.rating} onChange={this.handleInput}/>
                <section className="rating_scale">
                  <p>Rating Scale:</p>
                  <p>5- Highly recommend as soon as possible.</p>
                  <p>4- Recommend but not a go and get now.</p>
                  <p>3- Not a must have but still good. Maybe wait for it to be on sale.</p>
                  <p>2- Not for me. Not a bad game and could see others maybe liking it.</p>
                  <p>1- Garbage. Not even worth a try.</p>
                </section>
                <button type="submit">Submit</button>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>Close</Button>
              <Button variant="primary" onClick={this.handleClose}>Save Review</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </>
    )
  }
}

export default withRouter(ReviewSubmit)
