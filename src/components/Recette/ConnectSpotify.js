import React, { Component } from 'react';
import './index.css';

class ConnectSpotify extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: "",
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
        console.log(newname, this.props.name);
        const source = 'https://api.spotify.com/v1/search?' + 'q=' + newname + '&type=playlist&limit=1';
        const config = {
            method: 'GET',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + 'BQAw6x5O-s0II3E0N3y_CiHZpKfsW__9G2aCvsoZq-dYYk-NYjpUjNbFbnnrNKItCiy6szS1VrSRyF3rvlcCJV1wasun9o62ZGpAzvAIphWxsE-DdF7ksFU7KNUXHkB4kaKL7uGiMZi0qVQJAkNROTsLzr4kqi0NG69AssmrthHu539wnSDQy2G2Qdl4gspfq7fjrABE3xqd4NmVT9Wm94Vtets'
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