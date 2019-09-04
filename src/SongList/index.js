import React from 'react';

const Songs = (props) => {
  console.log(props, ' properties in songList')

  const songList = props.songs.map((song) => {
    return (
      <li key={song._id}>
        <span>{song.songTitle}</span><br/>
        <span>{song.artist}</span><br/>
        <span>{song.albumTitle}</span><br/>
        <span>{song.lyrics}</span><br/>
        <button onClick={props.deleteSong.bind(null, song._id)}>Delete</button><br/>
        <button onClick={props.showModal.bind(null, song)}>edit</button>
      </li>

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
