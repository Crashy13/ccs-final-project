import React from 'react';

class CollectionSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    }

    this.handleInput = this.handleInput.bind(this);

  }

  handleInput=(e)=>{
    this.setState({searchTerm: e.target.value})
  }


  render() {
    return(
      <>
      </>
    )
  }
}

export default CollectionSearch
