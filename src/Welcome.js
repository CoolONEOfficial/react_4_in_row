import React, {Component} from 'react';
import './Welcome.scss';
import {Link} from "react-router-dom";

export default class Welcome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            player1: 'FIrst',
            player2: 'Second',
        };
    }

    changeText(text) {
        // TODO: inputs binding

        return text;
    }

    render() {
        return (
            <div className="wrapper">
                <h1>Welcome</h1>
                <div className="inputWrapper">
                    <span>Player 1: </span>
                    <input type="text" size="40" />
                </div>
                <div className="inputWrapper">
                    <span>Player 2: </span>
                    <input type="text" size="40"/>
                </div>
                <br/><Link to="/board"><button>Start</button></Link>
            </div>
        );
    }
}
