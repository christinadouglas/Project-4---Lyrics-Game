import React from 'react';

const Songs = (props) => {
  console.log(props, ' properties in songList')

  const songList = props.songs.map((song) => {
    return (
      <div class="ui list">
      <li key={song._id}>
        <span>Song Title: {song.songTitle}</span><br/>
        <span>Artist: {song.artist}</span><br/>
        <span>Album Title: {song.albumTitle}</span><br/>
        <span>Song Lyrics: {song.lyrics}</span><br/>
        <button onClick={props.deleteSong.bind(null, song._id)}>Delete</button><br/>
        <button onClick={props.showModal.bind(null, song)}>Edit</button>
      </li>
      </div>
      )
  })

  return (
    <div>
      <h3>Song Lyrics</h3>
      <ul>
        {songList}
      </ul>
    </div>
    )
}



export default Songs;
