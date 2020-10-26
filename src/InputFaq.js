import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"

import Hello from "./Hello"

function InputFaq() {
    return(
        <Router>
            {/* <h1>QUESTIONS & ANSWERS</h1> */}
            <div>
                <ul>
                    <li>
                        <Link to="">Hello</Link>
                    </li>
                </ul>
            </div>

            <Switch>
                <Route exact path="./Hello.js">
                    <Hello />
                </Route>
            </Switch>
        </Router>
    )
}

export default InputFaq;