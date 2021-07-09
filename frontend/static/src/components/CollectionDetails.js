import React from 'react'
import {FormControl, FormLabel, Radio, RadioGroup, FormControlLabel} from '@material-ui/core'


class CollectionDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      play_status: '',
    }

    this.handleChange = this.handleChange.bind(this)

  }

  handleChange(e) {
    this.setState({value: e.target.value})
  }

  render() {
    const game = this.props.game;
    return(
      <>
      <li>
        <h2>{game.name}</h2>
        <img src={game.background_image} alt="game screenshot"/>
        <br/>
          <FormControl component="fieldset">
            <FormLabel component="legend">Play Status</FormLabel>
            <RadioGroup aria-label="play_status" name="play_status" value={this.state.play_status} onChange={this.handleChange}>
              <FormControlLabel value="Unstarted" control={<Radio />} label="Unstarted" />
              <FormControlLabel value="Playing" control={<Radio />} label="Playing" />
              <FormControlLabel value="Completed" control={<Radio />} label="Completed" />
            </RadioGroup>
          </FormControl>

        <br/>
        <button type="button" onClick={() => this.props.removeGame(game.id)}>Remove</button>
      </li>
      </>
    )
  }
}

export default CollectionDetails
