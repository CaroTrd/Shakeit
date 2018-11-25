import React, { Component } from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        }
    }

    handleClick() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <header>
                <div className={this.state.isOpen ? 'menu_bar_open' : 'menu_bar'} onClick={() => this.handleClick()}>

                    <span className="icon-menu"></span>
                    <nav>
                        <ul>
                            <li><NavLink to="/" activeClassName="selected" className="icon-home">HOME</NavLink></li>
                            <li><NavLink to="/CocktailList" className="icon-drink">COCKTAILS</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Navigation;