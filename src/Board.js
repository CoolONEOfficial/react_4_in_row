import React, {Component} from 'react';
import './Board.scss';
import {Link} from "react-router-dom";

export default class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {columns: new Array(6).fill(null).map((_) => [])};
    }

    click(i) {
        console.log(i);
        const newColumns = [...this.state.columns];
        newColumns[i].push(1);
        this.setState({
            columns: newColumns
        });
    }

    render() {
        return (
            <>
                <Link className="BackLink" to="/">Back to menu</Link>
                <div className="BoardWrapper">
                    {this.state.columns.map((column, i) => {
                        let str = "0".repeat(6 - column.length) + column.join('');

                        return (
                            <h1 key={i} onClick={() => this.click(i)}>
                                {str.split('').map((val, j) => {
                                    return (
                                        <div key={i + j}>
                                            {val}
                                            <br/>
                                        </div>
                                    );
                                })}
                            </h1>
                        );


                    })}
                </div>
            </>);
    }
}
