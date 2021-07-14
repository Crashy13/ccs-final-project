import React from 'react';
import ProfileSearchDetails from './ProfileSearchDetails'

class ProfileSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      profiles: [],
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
      .then(data => this.setState({data})).catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      })
      this.setState({searchTerm: ''})
  }

  render() {
    const profiles = this.state.profiles.map(profile => {
      <ProfileSearchDetails key={profile.id} profile={profile} />
    })
    return(
      <>
        <form onSubmit={this.getResults}>
          <label htmlFor="searchTerm">
            <strong>Find Friend: </strong>
            <input type="text" name="searchTerm" value={this.state.searchTerm} onChange={this.handleInput} autoComplete="off"/>
            <input type="submit" value="submit"/>
          </label>
        </form>
      </>
    )
  }
}




export default ProfileSearch


// const ProfileSearch = () => {
//
//   const [searchTerm, setSearchTerm] = useState("")
//   const [profileResults, setProfileResults] = useState([])
//
//   const handleChange = (e) => {
//     setSearchTerm(e.target.value)
//   }
//
//   const onSubmit = (e) => {
//     e.preventDefault()
//     let slug = searchTerm
//     // somehow take the search term and compare it to profile.display_name? Then show all profile's with close iterations to that display name? Then when clicked on a profile, it changes to id to access that profile?
//
//     setProfileResults()
//     fetch(`api/v1/users/profiles/12/add_follower`)
//       .then(response => {
//         if(!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => this.setState({data})).catch(error => {
//         console.error('There has been a problem with your fetch operation:', error);
//       })
//   }
//
//   return(
//     <div>
//       <h1>Profiles</h1>
//         <form onSubmit={onSubmit}>
//           <input type="text" value={searchTerm} onChange={handleChange}/>
//           <input type="submit"/>
//         </form>
//         <ProfileSearchDetails />
//     </div>
//   )
// }
