import React from 'react'
import WishlistDetails from './WishlistDetails'
import Cookies from 'js-cookie'

class Wishlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wishlists: [],
    }

    this.removeItem = this.removeItem.bind(this)

  }

  componentDidMount() {
    fetch(`/api/v1/wishlists/`)
      .then(response => {
        if(!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json()
      })
      .then(data => this.setState({wishlists:data})).catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      })
  }

  removeItem(id) {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
    }
    fetch(`/api/v1/wishlists/${id}`, options)
      .then(response => {
        const wishlists = [...this.state.wishlists]
        const index = wishlists.findIndex(wishlist => wishlist.id === id);
        wishlists.splice(index, 1);
        this.setState({wishlists})
      })
  }

  render() {
    const wishlists = this.state.wishlists.map(wishlist => (
      <WishlistDetails key={wishlist.id} wishlist={wishlist} removeItem={this.removeItem} />
    ))
    return(
      <>
        <ul>
          <h2>Wishlist</h2>
          <p>{wishlists}</p>
        </ul>
      </>
    )
  }
}

export default Wishlist
