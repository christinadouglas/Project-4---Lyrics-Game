import React from 'react';
import './App.css';
import SongContainer from './SongContainer';
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <Switch>
    <Route exact path='/songs' component={ SongContainer }/>
    </Switch>
    </div>
  );
}

export default App;
