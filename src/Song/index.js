import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Song extends Component {
    state = {
        song: {}
    }
    async componentDidMount() {
        const id = this.props.match.params.id
        const song = await(await fetch(`http://localhost:9000/api/v1/songs/${id}`)).json()
        this.setState({song: song.data})
    }
    render() {
        return (
            <div>
                {this.state.song.songTitle}
            </div>
        )
    }
}

export default withRouter(Song)