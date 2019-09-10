import React, { Component } from 'react';
import Header from '../Header'
import { Container } from 'semantic-ui-react'

const Home = () => {
    return (
        <div className='home'>
        <Header/>
        <h1>Lyric's Play</h1>
        <h2>Start playing right away, or, add your own lyrics for you and others to play too!</h2>
        </div>  
    )
}

export default Home;