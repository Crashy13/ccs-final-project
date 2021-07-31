import React from 'react';
import CollectionDetails from './CollectionDetails';

class CollectionSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    }

    this.getResults = this.getResults.bind(this);
    this.handleInput = this.handleInput.bind(this);

  }

  handleInput=(e)=>{
    this.setState({searchTerm: e.target.value})
  }

  getResults(e) {
    e.preventDefault();
    fetch(`api/v1/games/?name=${this.state.searchTerm}`)
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

    return(
      <>
      <form onSubmit={this.getResults}>
        <label htmlFor="searchTerm">
          <strong>Search Collection: </strong>
          <input type="text" name="searchTerm" value={this.state.searchTerm} onChange={this.handleInput} autoComplete="off"/>
          <input type="submit" value="submit"/>
        </label>
      </form>
      </>
    )
  }
}

export default CollectionSearch
