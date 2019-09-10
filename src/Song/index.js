import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Header from '../Header'
import { Button } from 'semantic-ui-react'

import './style.css'

class Song extends Component {
    state = {
        song: {},
        num: null,
        lyrics: [],
        isWinner: false,
        copyLyrics: []
    }

    componentDidMount() {
        this.getSong()
    }


    getSong = async () => {
        const id = this.props.match.params.id
        const song = await(await fetch(`http://localhost:9000/api/v1/songs/${id}`)).json()
        const lyricsArray = song.data.lyrics.split(' ')
        const random = Math.floor(Math.random() * lyricsArray.length)
        const word = lyricsArray[random]
        lyricsArray[random] = '_________'
        this.setState({
            song: song.data,
            lyrics: lyricsArray,
            copyLyrics: [...lyricsArray],
            word,
            isWinner: false,
            id,
            random
        })
    }

    makeInput = index => {
        this.setState({num: index})
    }

    onChange = (e, i) => {
        console.log(e.target.value)
        const newLyrics = this.state.lyrics.map((l,idx) => {
            if(idx === i) {
                return e.target.value
            } else {
                return l
            }
        })
        this.setState({
            lyrics: newLyrics
        })
    }

    checkWord = () => {
        const isWinner = this.state.song.lyrics === this.state.lyrics.join(' ')
        this.setState({
            isWinner,
            num: null,
            lyrics: isWinner ? [...this.state.lyrics] : [...this.state.copyLyrics]
        })
        if(isWinner) {
            const songId = this.props.match.params.id
            this.props.updateSongList(songId)
        }
    }

    render() {
        console.log(this.state.lyrics)
        if (this.state.id !== this.props.match.params.id) { this.getSong() }
        return (
            <div>
            <Header/>
                <h2>{this.state.song.songTitle}</h2>
                <div>
                    {this.state.lyrics.map((l,i) => 
                        (this.state.num === i)
                            ? <input type='text' onChange={(e) => this.onChange(e,i)}/>
                            : (this.state.random === i) 
                                ? <span onClick={() => this.makeInput(i)}>{l} </span>
                                : <span>{l} </span>
                    )}
                </div>
                <Button onClick={this.checkWord}>Check Answer</Button>
                {this.state.isWinner &&
                    <div>
                        "You Won!"
                        <button onClick={() => this.props.playGame()}>Next Round</button>
                    </div>
                }
            </div>
        )
    }
}

export default withRouter(Song)

