import React, { Component} from 'react';
import './App.css';
import SongContainer from './SongContainer';
import { Route, Switch, withRouter } from 'react-router-dom';
import Game from './WordGame'
import Home from './Home'
import Song from './Song'

const My404 = () => {
  return (
    <div>
      You're lost 
    </div>
    )
};



class App extends Component {

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

  updateSongList = (songId) => {
   this.setState({
     songs: this.state.songs.filter(s => s !== songId)
   })
  }

  render() {
    console.log(this.state.songs)
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component= { Home }/>
          <Route exact path='/songs' component={ SongContainer }/>
          <Route exact path='/game' render={() =>  <Game playGame={this.playGame} /> }/>
          <Route exact path='/songs/:id' render= {() => <Song updateSongList={this.updateSongList} playGame={this.playGame} />} />
          <Route component={My404} />
        </Switch>
      </div>
    );
  }

}



export default withRouter(App);
