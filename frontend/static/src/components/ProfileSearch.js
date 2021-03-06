import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class ProfileSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      results: [],
    }

    this.getResults = this.getResults.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput=(e)=>{
    this.setState({searchTerm: e.target.value})
  }

  getResults(e) {
    e.preventDefault();
    fetch(`/api/v1/users/profiles/?display_name=${this.state.searchTerm}`)
      .then(response => {
        if(!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(results => {
        console.dir(results);
        this.setState({results});
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      })
      this.setState({searchTerm: ''})
  }

  render() {
    const searchResults = this.state.results.map(result => (
      <li key={result.id}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={result.avatar} />
          <Card.Body>
            <Card.Title>{result.display_name}</Card.Title>
            <Button variant="primary" onClick={() => this.props.addFriend(result)}>Add friend</Button>
          </Card.Body>
        </Card>
      </li>
    ))
    return(
      <>
        <form onSubmit={this.getResults}>
          <label htmlFor="searchTerm">
            <strong>Find Friend: </strong>
            <input type="text" name="searchTerm" value={this.state.searchTerm} onChange={this.handleInput} autoComplete="off"/>
            <input type="submit" value="submit"/>
          </label>
        </form>
        <ul>{searchResults}</ul>
        <h3>{this.state.results?.display_name}</h3>
      </>
    )
  }
}




export default ProfileSearch
