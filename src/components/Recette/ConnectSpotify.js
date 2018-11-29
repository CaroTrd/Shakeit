import React, { Component } from 'react';

import './index.css';

class ConnectSpotify extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cocktailName: 'Mertens',
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
                "Authorization": 'Bearer ' + 'BQDUkk9FI4oX05IoFkAmqKLKs6fO_unscvV99Ve39TPUWj_gEQhyswGt7gaywNQM0tOZrQv5BfdSnpaDAq4MMWgCwK8t0yN9VjD7-9Ls_cv6GkUwqxS3lyw-vXAUiw7Hnp5Ez9tRG5PBfO9yx-5pB1Lm8emSD7MugS8rSVN8041GWq-LAKHLLkGhwNvY4Kh61OKG2zO9V3jZ29wszZUx2klKuY8'
            }
        }
        fetch(source, config)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (!data.playlists.items.length > 0) {
                    this.setState({
                        url: '37i9dQZF1DWWzhxZzVxMP3'
                    })
                } else {
                    this.setState({
                        url: data.playlists.items[0].id
                    })
                }
            })
    }

    render() {
        console.log(this.state.url)
        return (
            <div className="play">
                <iframe src={`https://open.spotify.com/embed/playlist/${this.state.url}`} width="300" height="75" frameBorder="0" allowtransparency="true">
                </iframe>
            </div >
        );
    }
}

export default ConnectSpotify;