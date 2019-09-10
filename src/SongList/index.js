import React from 'react';
import { Button } from 'semantic-ui-react'

const Songs = (props) => {
  console.log(props, ' properties in songList')

  const songList = props.songs.map((song) => {
    return (
      <div className="ui list">
      <li key={song._id}>
        <span fontWeight='bold'>Song Title: {song.songTitle}</span><br/>
        <span>Artist: {song.artist}</span><br/>
        <span>Album Title: {song.albumTitle}</span><br/>
        <span>Lyrics: {song.lyrics}</span><br/>
        <Button onClick={props.deleteSong.bind(null, song._id)}>Delete</Button><br/>
        <Button onClick={props.showModal.bind(null, song)}>Edit</Button>
      </li>
      </div>
      )
  })

  return (
    <div>
      <h2>Song Lyrics</h2>
      <ul>
        {songList}
      </ul>
    </div>
    )
}



export default Songs;
