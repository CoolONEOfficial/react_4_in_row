import React, {Component} from 'react';
import './GameOver.scss';
import {Link} from "react-router-dom";

export default class GameOver extends Component {
    render() {
        return (
            <div className="wrapper">
                <h1>Game over</h1>
                <Link to="/board">Try again</Link><br/>
                <Link to="/">Main menu</Link>
            </div>
        );
    }
}
