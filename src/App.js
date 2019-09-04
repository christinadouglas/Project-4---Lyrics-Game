import React from 'react';
import './App.css';
import SongContainer from './SongContainer';
import { Route, Switch } from 'react-router-dom';
import Game from './WordGame'

function App() {
  return (
    <div className="App">
    <Switch>
    <Route exact path='/songs' component={ SongContainer }/>
    <Route exact path='/game' component={ Game }/>
    </Switch>
    </div>
  );
}

export default App;
