import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ButtonRetour extends Component {
    backButton(){
        this.props.history.goBack();
    }
    render() {
        return (
            <div className="boutonretour" onClick={() => this.backButton}>
                <button className="retour">Back</button>
            </div>
        )
    }
}

export default withRouter(ButtonRetour);