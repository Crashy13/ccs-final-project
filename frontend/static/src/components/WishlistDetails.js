import React from 'react';
import Moment from 'react-moment';
import {Button} from 'react-bootstrap';
import GameReviews from './GameReviews'


class WishlistDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      is_owned: this.props.game.is_owned
    }
  }
  render() {
    const game = this.props.game;
    return(
      <>
      <li className="collection-item">
        <h2 className="collection-title">{game.name}</h2>
        <section className="collection-body">
        <img src={game.background_image} alt="game screenshot"/>
        <p>Date Added To Wishlist:</p><Moment className="release-date" format="MM/DD/YYYY">{game.date_added}</Moment>
        <br/>
        <br/>
        <Button className="collection-button" type="button" onClick={() => this.props.updateOwned(game.id)}>Add to Collection</Button>
        <Button className="collection-button" type="button" onClick={() => this.props.removeGame(game.id)}>Remove</Button>
        <GameReviews game={game} />
        </section>
      </li>
      </>
    )
  }
}

export default WishlistDetails
