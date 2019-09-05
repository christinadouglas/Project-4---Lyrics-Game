import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Header from '../Header'

class Song extends Component {
    state = {
        song: {
        },
        num: null,
        lyrics: [],
        isWinner: false,
        copyLyrics: []
    }
    async componentDidMount() {
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
            word
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
    }

    render() {
        console.log(this.state.lyrics)
        return (
            <div>
            <Header/>
                {this.state.song.songTitle}
                <div>
                    {this.state.lyrics.map((l,i) => 
                        (this.state.num === i)
                            ? <input type='text' onChange={(e) => this.onChange(e,i)}/>
                            : <span onClick={() => this.makeInput(i)}>{l} </span>
                    )}
                </div>
                <button onClick={this.checkWord}>Check Answer</button>
                {this.state.isWinner &&  "You Won!"}
            </div>
        )
    }
}

export default withRouter(Song)

