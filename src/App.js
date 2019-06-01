import React from 'react';
import './App.scss';
import Board from './Board';
import GameOver from './GameOver';
import Welcome from './Welcome';
import NotFound from './NotFound';
import {HashRouter, Route, Switch} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <HashRouter>
                <Switch>
                    <Route path="/" exact component={Welcome}/>
                    <Route path="/board" component={Board}/>
                    <Route path="/gameover" component={GameOver}/>
                    <Route component={NotFound}/>
                </Switch>
            </HashRouter>
        </div>
    );
}

export default App;
