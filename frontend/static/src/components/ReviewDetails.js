import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';

class ReviewDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      title: this.props.review.title,
      body: this.props.review.body,
      rating: this.props.review.rating,
    }

    this.handleInput = this.handleInput.bind(this)
    this.saveReview = this.saveReview.bind(this)

  }

  handleInput(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  saveReview() {
    const review = this.props.review;
    review.body = this.state.body;
    this.props.editReview(review);
    this.setState({isEditing: false});
  }

  render() {
    const review = this.props.review;
    return(
      <>
      <div>
        <li>
          <h2>{review.game}</h2>
          {this.state.isEditing
            ?<input className="review_input" type="text" autoComplete="off" name="title" value={this.state.title} onChange={this.handleInput}/>
            :<h3>{review.title}</h3>
          }
          <Moment format="MM/DD/YYYY hh:mm">{review.created_at}</Moment>
          {this.state.isEditing
            ? <textarea cols="30" row="10" name="body" value={this.state.body} onChange={this.handleInput} />
            : <p>{review.body}</p>
          }
          {this.state.isEditing
            ?<input type="text" autoComplete="off" placeholder="Rating 1-5" name="rating" value={this.state.rating} onChange={this.handleInput}/>
            :<h4>My Rating: {review.rating}</h4>
          }
          {this.state.isEditing
            ? <button type="button" onClick={this.saveReview}>Save</button>
            : review.is_owner && <button type="button" onClick={() => this.setState({isEditing: true})}>Edit</button>
          }

          {review.is_owner && <button type="button" onClick={() => this.props.deleteReview(review.id)}>Delete</button>}
        </li>

      </div>
      </>
    )
  }
}

export default ReviewDetails
