import React, { Component } from 'react';


class AddSong extends Component {
  constructor(){
    super();

    this.state = {
      songTitle: '',
      artist: '',
      albumTitle: '',
      lyrics: ''
    
    }

  }
  updateSong = (e) => {
    this.setState({[e.currentTarget.name] : e.currentTarget.value})
  }
  render(){
    return (
      <form onSubmit={this.props.addSong.bind(null, this.state)}>
        <label htmlFor="title">Song Title:
          <input type="text" name="title" onChange={this.updateSong} value={this.state.songTitle}/>
        </label>
        <label htmlFor="artist">Artist:
          <input type="text" name="artist" onChange={this.updateSong} value={this.state.artist}/>
        </label>
        <label htmlFor="albumTitle">Album Title:
          <input type="text" name="albumTitle" onChange={this.updateSong} value={this.state.albumTitle}/>
        </label>
        <label htmlFor="lyrics">Lyrics:
          <textarea type="text" name="lyrics" onChange={this.updateSong} value={this.state.lyrics}/>
        </label>
        <button type='submit'>
          Add Song
        </button>
      </form>
      )
  }
}

export default AddSong;