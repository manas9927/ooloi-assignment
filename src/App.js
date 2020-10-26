import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import {
    Route, BrowserRouter as Router, Switch, Link
} from "react-router-dom"

import Input from "./pages/input/"
import Display from "./pages/display/"

function App() {
    return(
        <Router>
            <div>
                <Link to="input">
                    <Button variant="outlined" color="primary">Input</Button>
                </Link>
                <Link to="display">
                    <Button variant="outlined" color="primary">Display</Button>
                </Link>
            </div>
            <Switch>
                {/* <Route path="/Hello" component={Hello} /> */}
                <Route path="/display" component={Display} />
                <Route path="/input" exact component={Input} />
                
            </Switch>
        </Router>
    )
}

export default App;