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
                <div className={'menu_bar ' + (this.state.isOpen ? 'menu_bar_open' : '')} onClick={() => this.handleClick()}>

                    <span className="icon-menu"></span>
                    <nav>
                        <ul>
                            <li><NavLink to="/">HOME</NavLink></li>
                            <li><NavLink to="/cocktaillist" >COCKTAILS</NavLink></li>
                            <li><NavLink to="/ingredients" activeClassName="selected">INGREDIENTS</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Navigation;