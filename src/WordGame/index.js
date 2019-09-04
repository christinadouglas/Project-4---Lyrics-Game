import React, { Component } from 'react';
import Header from '../Header'

class Game extends Component {
    state = {
        songs: []
    }

    componentDidMount() {
        this.getSongs()
    }

    getSongs = async () => {
        try {
    
          const responseGetSongs = await fetch('http://localhost:9000/api/v1/songs', {
            credentials: 'same-origin',
            method: 'GET'
          });
          console.log(responseGetSongs, '<-- responseGetSongs')
    
          if(responseGetSongs.status !== 200){
            throw Error('404 from server');
          }
          const songsResponse = await responseGetSongs.json();
          console.log(songsResponse, ' moviesResponse <')
    
          this.setState({
            songs: [...songsResponse.data.map(s => s._id)]
          });
        } catch(err){
          console.log(err, ' getSongs errors');
          return err
        }
      }

      playGame = () => {
          const id = this.state.songs[Math.floor(Math.random() * this.state.songs.length)]
          this.props.history.push(`/songs/${id}`)
      }

   render() {
       return (
            <div className="game-container">
            <Header/>
            <h2>Welcome to Game!</h2>
            <button onClick={this.playGame}>Play</button>
            </div>
        )
   } 
}

export default Game;