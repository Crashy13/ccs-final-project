import React from 'react';
import {withRouter} from 'react-router-dom';
import Moment from 'react-moment';
import ReviewSubmit from './ReviewSubmit'
import GameReviews from './GameReviews'
import {Card, Button} from 'react-bootstrap/'


class CollectionDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      play_status: 'UNSTARTED',
      show: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.saveStatus = this.saveStatus.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }


  handleChange(e) {
    this.setState({play_status: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  saveStatus() {
    const game = this.props.game;
    game.play_status = this.state.play_status;
    this.props.updateStatus(game);
    this.setState({isEditing: false})
  }

  render() {
    const game = this.props.game;
    return(
      <>
      <li className="collection-item">
        <h2 className="collection-title">{game.name}</h2>
        <section className="collection-body">
        <ReviewSubmit game={game}/>
        <img src={game.background_image} alt="game screenshot"/>
        <p>Date Added To Collection:</p><Moment className="release-date" format="MM/DD/YYYY">{game.date_added}</Moment>
        <br/>
        <br/>
        {this.state.isEditing
          ? <form onSubmit={this.handleSubmit}>
              <select value={this.state.play_status} onChange={this.handleChange}>
               <option value="NOTSTARTED">Not Started</option>
               <option value="PLAYING">Playing</option>
               <option value="COMPLETED">Completed</option>
              </select>
            </form>
          : <p>Play Status: {game.play_status}</p>}
        {this.state.isEditing
          ? <Button className="collection-button" type="button" onClick={this.saveStatus}>Save</Button>
          : <Button className="collection-button" type="button" onClick={() => this.setState({isEditing: true})}>Change Play Status</Button>}

        <Button className="collection-button" type="button" onClick={() => this.props.removeGame(game.id)}>Remove</Button>
        <GameReviews />
        </section>
      </li>
      </>
    )
  }
}

export default withRouter(CollectionDetails)
