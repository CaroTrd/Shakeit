import React, { Component } from 'react';
import './index.css';

class ConnectSpotify extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: "",

        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.name !== this.props.name) {
            this.fetchSong()
        }
    }

    fetchSong() {
        let nom = this.props.name;
        let newname = nom.replace("#", "");
        const source = 'https://api.spotify.com/v1/search?' + 'q=' + newname + '&type=playlist&limit=1';
        const config = {
            method: 'GET',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + 'BQBjdTOCgfYVBXB8NsN5q_4ME-nROKxr8YzyyXWxW8YK44gLGLyB8b6hv57KC7RtkIff-PBQOwavYnQH7ux_8VPAiFb92wdnZ0SYYyP7SjMeyjfdLF2NGoses1NDYSnBOkuee5Mu-z6iRJu0A9sappZkEwgNJEo8p4tRc3wABntnebUdUKnJ__l9h8NBUt32dQQM1v14Gg9yzJL5xKXuM9ac-Jg'
            }
        }
        fetch(source, config)
            .then(response => response.json())
            .then(data => {
                if (!data.playlists.items.length > 0) {
                    this.setState({
                        url: 'https://open.spotify.com/playlist/37i9dQZF1DWWzhxZzVxMP3'
                    })
                } else {
                    this.setState({
                        url: data.playlists.items[0].external_urls.spotify
                    })
                }
            })
    }

    render() {
        return (
            <div className="play">
                <a href={this.state.url} target="_blank">
                    <button className="Spotify">
                        <p className="description"> Listen to music here</p>
                        <img src="https://static.thenounproject.com/png/115005-200.png" alt="spotify" className="spotify-logo" />
                    </button>
                </a>
            </div >
        );
    }
}

export default ConnectSpotify;