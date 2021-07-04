import React from 'react';
import './App.css';

class App extends React.Component {

    componentDidMount() {
      fetch('https://api.rawg.io/api/games')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => console.log({ data })).catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
    }
  render() {
    return (
        <>
        </>
    );
  }
}

export default App;
