import React from 'react';
import './App.css';
import SongContainer from './SongContainer';
import { Route, Switch } from 'react-router-dom';
import Game from './WordGame'
import Home from './Home'

const My404 = () => {
  return (
    <div>
      You're lost 
    </div>
    )
};

function App() {
  return (
    <div className="App">
    <Switch>
    <Route exact path='/' component= { Home }/>
    <Route exact path='/songs' component={ SongContainer }/>
    <Route exact path='/game' component={ Game }/>
    <Route component={My404} />
    </Switch>
    </div>
  );
}

export default App;
