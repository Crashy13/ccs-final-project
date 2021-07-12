import React from 'react'


class CollectionDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      play_status: this.props.game.play_status,
    }

    this.handleChange = this.handleChange.bind(this)
    this.saveStatus = this.saveStatus.bind(this)

  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
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
      <li>
        <div className="collection-item">
        <h2>{game.name}</h2>
        <img src={game.background_image} alt="game screenshot"/>
        <br/>
        {this.state.isEditing
          ? <form onChange={this.handleChange}>
             <input type="text" name="play_status" value={this.state.play_status} autoComplete="off"/>
            </form>
          : <p>Play Status: {game.play_status}</p>}
        {this.state.isEditing
          ? <button type="button" onClick={this.saveStatus}>Save</button>
          : <button type="button" onClick={() => this.setState({isEditing: true})}>Change Play Status</button>}

        <button type="button" onClick={() => this.props.removeGame(game.id)}>Remove</button>
        </div>
      </li>
      </>
    )
  }
}

export default CollectionDetails
