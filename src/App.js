import React from "react"
import "./myStyle.css"

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
	                <button class="switchButton"><span>Input Version</span></button>
                </Link>
                <Link to="display">
                    <button class="switchButton"><span>Display Version</span></button>
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