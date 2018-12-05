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

    componentDidMount() {
        this.fetchSong()
    }

    componentDidUpdate(prevProps){
        if(prevProps.name !== this.props.name ){
            this.fetchSong()
        }
    }

    fetchSong(){
        const source = 'https://api.spotify.com/v1/search?' + 'q=' + this.props.name + '&type=playlist&limit=1';
        const config = {
            method: 'GET',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + 'BQAkAmTKiyP-kr2dp55AxwfHUiL4ONmz7REjq_j-GeC0LcmAmQqnXfQn2E98xsJyb5dkoLWeynS9AIWODBl03XKPxbd_WhJzshhPRZcbAvb6f8vHBPgBmB8oAS1Tb6UBojLCWN6MGAV6mq8KL4d7A4MQocd1NLY5wutzr5jb5IqGDgROWNqSE4G2XLk1YOO2hZgsO_vCgnr2rCeaIUstWRo6tTo'
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