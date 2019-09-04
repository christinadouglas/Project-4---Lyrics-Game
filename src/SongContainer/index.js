import React, { Component } from 'react';
import AddSong from '../AddSong';
import SongList from '../SongList';
import EditSong from '../EditSong';

class SongContainer extends Component {
  constructor(){
    super();

    this.state = {
      songs: [],
      showEditModal: false,
      songToEdit: {
        _id: null,
        songTitle: '',
        artist: '',
        albumTitle: '',
        lyrics: ''
      }
    }
  }
  componentDidMount(){
    this.getSongs();
  }
  addSong = async (song, e) => {
    e.preventDefault(); 
    console.log(song, e, ' <-- this is addSong')

    try {
      const createSong= await fetch('http://localhost:9000/api/v1/songs',{
        method: 'POST',
        credentials: 'same-origin',
        body: JSON.stringify(song),
        headers: {
          'Content-Type': 'application/json' 
        }
      })
      console.log(createSong, "<-- AddSong fetch")
      if(createSong.status !== 200){

        throw Error('Resource not found')
      }

      const createSongResponse = await createSong.json();
      console.log(createSongResponse.data, '<-- createSongResponse');
      this.setState({
        songs: [...this.state.songs, createSongResponse.data]
      })
    } catch(err) {
      console.log(err, ' <--- addSong');
      return err
    }
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
        songs: [...songsResponse.data]
      });
    } catch(err){
      console.log(err, ' getSongs errors');
      return err
    }
  }

  handleFormChange = (e) => {
    this.setState({
      songToEdit: {
        ...this.state.songToEdit, 
        [e.target.name]: e.target.value
      }
    })
  }

  showModal = (song) => {
    console.log(song, ' songID in show Modal')
    this.setState({
      songToEdit: song,
      showEditModal: !this.state.showEditModal
    })
  }
  closeAndEdit = async (e) => {
    e.preventDefault();

    try {
      const editRequest = await fetch('http://localhost:9000/api/v1/songs/' + this.state.songToEdit._id, {
        method: 'PUT',
        credentials: 'same-origin',
        body: JSON.stringify(this.state.songToEdit),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if(editRequest.status !== 200){
        throw Error('editResquest not working')
      }
      const editResponse = await editRequest.json();
      const editedSongArray = this.state.songs.map((song) => {
        if(song._id === editResponse.data._id){
          song = editResponse.data
        }
        return song
      });

      this.setState({
        songs: editedSongArray,
        showEditModal: false
      })

      console.log(editResponse, ' editResponse');

    } catch(err){
      console.log(err, ' error closeAndEdit');
      return err
    }
  }

  deleteSong = async (id) => {
    console.log(id, ' delete Song ID')
    try {
      const deleteSong = await fetch('http://localhost:9000/api/v1/songs/' + id, {
        method: 'DELETE',
        credentials: 'same-origin'
      });

      if(deleteSong.status !== 200){
        throw Error('Something happend on delete')
      }

      const deleteSongJson = await deleteSong.json();
      this.setState({
        songs: this.state.songs.filter((song) => song._id !== id)
      })
    } catch(err){
      console.log(err);
      return err
    }
  }
  render(){
    console.log(this.state, "< state in render");
    return (
      <div className='song-container'>
        <AddSong addSong={this.addSong}/>
        <SongList songs={this.state.songs} showModal={this.showModal} deleteSong={this.deleteSong}/>
        {this.state.showEditModal ? <EditSong closeAndEdit={this.closeAndEdit} songToEdit={this.state.songToEdit} handleFormChange={this.handleFormChange}/> : null}
      </div>
      )
  }
}

export default SongContainer;
