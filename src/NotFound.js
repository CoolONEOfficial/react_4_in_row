import React, {Component} from 'react';
import './NotFound.scss';
import {Link} from "react-router-dom";

export default class NotFound extends Component {
    render() {
        return (
            <div className="wrapper">
                <h1 className='error'>Error 404..</h1>
                <Link to="/">Main menu</Link>
            </div>
        );
    }
}
