import React from 'react';
import ProfileSearchResults from './ProfileSearchResults'

class ProfileSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      display_name: '',
      avatar: null,
    }
    this.getResults = this.getResults.bind(this)
    this.handleInput = this.handleInput.bind(this)
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
      .then(results =>
        this.setState(results)).catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      })
      this.setState({searchTerm: ''})
  }

  render() {
    return(
      <>
        <form onSubmit={this.getResults}>
          <label htmlFor="searchTerm">
            <strong>Find Friend: </strong>
            <input type="text" name="searchTerm" value={this.state.searchTerm} onChange={this.handleInput} autoComplete="off"/>
            <input type="submit" value="submit"/>
          </label>
        </form>
        <h3>{this.state.results?.display_name}</h3>
      </>
    )
  }
}




export default ProfileSearch
