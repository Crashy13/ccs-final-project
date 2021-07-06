import React from 'react'
import Cookies from 'js-cookie'

class ReviewSubmit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      title: '',
      author: '',
      body: '',
      rating: '',
    }

    this.addReview = this.addReview.bind(this);
    this.handleInput = this.handleInput.bind(this);

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
      this.setState({title: '', author: '', body: ''})
  }
  render() {
    return(
      <>
        <div>
          <form onSubmit={this.addReview}>
            <input type="text" name="title" value={this.state.title} onChange={this.handleInput} placeholder="Title of Review"/>
            <textarea name="body" value={this.state.body} onChange={this.handleInput} id="" cols="30" rows="10" placeholder="Your thoughts"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </>
    )
  }
}

export default ReviewSubmit
