import React, { Component } from 'react';
import './index.css';

class ConnectSpotify extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cocktailName: 'Mojito',
            images: "",
            url: "",

        }
    }

    componentDidMount() {
        const source = 'https://api.spotify.com/v1/search?' + 'q=' + this.state.cocktailName + '&type=playlist&limit=1';
        const config = {
            method: 'GET',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + 'BQBLs-AXkkjPHgkcEmbIeFmSW5tXTQ-qHQ_GkOLYyzrb2rUaG1HYr1gkF6zKMhw4SN4vzrbVQKiH1dA25m3ghwwcqvIpWYA6f073AVcmb-1s8PLet3PYwjXdYahNHNymMm1FyGDTanYxtcd5g-3N2Dzl6r9tB6htzfJQj_kK2DYdvaubbxoUiGPOHVowUK-sckCB7OqNe5GORlKdRnRqm1UCt44'
            }
        }
        fetch(source, config)
            .then(response => response.json())
            .then(data => {
                console.log(data)
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
        console.log(this.state.url)
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