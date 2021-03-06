import React, { Component } from 'react';
import {Form, Button, Label} from 'semantic-ui-react';

const EditSong = (props) =>  {

  return (
    <div>
      <h2> Edit Song</h2>
      <Form onSubmit={props.closeAndEdit}>
        <Label>
          Song Title:
          <Form.Input type="text" name="songTitle" onChange={props.handleFormChange} value={props.songToEdit.songTitle}/>
        </Label>
        <Label>
          Artist:
          <Form.Input type="text" name="artist" onChange={props.handleFormChange} value={props.songToEdit.artist}/>
        </Label>
        <Label>
          Album Title:
          <Form.Input type="text" name="albumTitle" onChange={props.handleFormChange} value={props.songToEdit.albumTitle}/>
        </Label>
        <Label>
          Lyrics:
          <Form.TextArea type="text" name="lyrics" onChange={props.handleFormChange} value={props.songToEdit.lyrics}/>
        </Label>
        <Button type='Submit'>Edit</Button>
      </Form>
    </div>
    )
  }

export default EditSong;
