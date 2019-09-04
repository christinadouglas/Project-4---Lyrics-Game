import React from 'react';
import './App.css';
import AddSong from './AddSong';
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <Switch>
    <Route exact path='/songs' component={ AddSong }/>
    </Switch>
    </div>
  );
}

export default App;
