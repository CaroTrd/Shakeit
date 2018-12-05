import React, { Component } from 'react';

class ConnectSpotify extends Component {

    render() {
        return (
            <div className="play">
                <button className="Spotify">
                    <p className="description">Listen to music here</p>
                    <img src="https://static.thenounproject.com/png/115005-200.png" alt="spotify" className="spotify-logo" />
                </button>
            </div>
        );
    }
}

export default ConnectSpotify;