import React from 'react'

const WishlistDetails = (props) => {

    const wishlist = props.wishlist;

    return(
      <div>
        <li>
          <p>Game: {wishlist.name}</p>
          <p>Platform(s): {wishlist.platform}</p>
          <button>Move to Collection</button>
          <button type="button" onClick={()=> props.removeItem(wishlist.id)}>Remove</button>
        </li>
      </div>
    )
  }


export default WishlistDetails
