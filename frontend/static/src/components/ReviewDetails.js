import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import {Button} from 'react-bootstrap';

class ReviewDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      title: this.props.review.title,
      body: this.props.review.body,
      rating: this.props.review.rating,
    }

    this.handleInput = this.handleInput.bind(this);
    this.saveReview = this.saveReview.bind(this);

  }

  handleInput(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  saveReview() {
    const review = this.props.review;
    review.title = this.state.title;
    review.body = this.state.body;
    review.rating = this.state.rating;
    this.props.editReview(review);
    this.setState({isEditing: false});
  }

  render() {
    const review = this.props.review;
    return(
      <>
      <div>
        <li className="review-container">
          {this.state.isEditing
            ?<input type="text" autoComplete="off" name="title" value={this.state.title} onChange={this.handleInput}/>
            :<h3>{review.title}</h3>
          }
          <Moment format="MM/DD/YYYY hh:mm">{review.created_at}</Moment>
          <p>By: {review.author}</p>
          {this.state.isEditing
            ? <textarea cols="30" row="10" name="body" value={this.state.body} onChange={this.handleInput} />
            : <p>{review.body}</p>
          }
          <br/>
          {this.state.isEditing
            ?<select name="rating" value={this.state.rating} onChange={this.handleInput}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            :<h4>My Rating: {review.rating}</h4>
          }
          {this.state.isEditing
            ? <Button className="collection-button" type="button" onClick={this.saveReview}>Save</Button>
            : review.is_owner && <Button className="collection-button" type="button" onClick={() => this.setState({isEditing: true})}>Edit</Button>
          }

          {review.is_owner && <Button className="collection-button" type="button" onClick={() => this.props.deleteReview(review.id)}>Delete</Button>}
          <div id="pacman"></div>
        </li>

      </div>
      </>
    )
  }
}

export default ReviewDetails
