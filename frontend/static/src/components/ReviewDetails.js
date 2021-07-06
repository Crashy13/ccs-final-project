import React from 'react'

class ReviewDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      body: this.props.review.body
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
          <h3>{review.title}</h3>
          {this.state.isEditing
            ? <textarea cols="30" row="10" name="body" value={this.state.body} onChange={this.handleInput} />
            : <p>{review.body}</p>
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
