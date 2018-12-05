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

        const source = 'https://api.spotify.com/v1/search?'+'q='+ this.props.name + '&type=playlist&limit=1';
        const config = {
            method: 'GET',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + 'BQCbjopFI45_xMBq7puPZZ-yQN0WlgkUBTmNV9m-Jo3mRisheKBl9GUfIhzLdRbZBGtJG8H_fzTe8thiaWDR_llu7hK_h8vxjQxq4ec5k-CiLmZCVQPueSt69ulU5hDc1hr1lXI_lCsrHlsnVfHP5ql4QP1mzh4DqugsfxjPzd3XT7wEzhuMR0COgo31zR-90q6Jw4geMRvNJ970KHsNNkQyKn8'
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