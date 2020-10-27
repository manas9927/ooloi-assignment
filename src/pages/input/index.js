import React from "react"
import QnaInput from "./qnaInput"
import AddButton from "./addButton"
import "../../myStyle.css"

function input() {
    return(
        <div className="componentBody">
            <div className="componentContainer">
                <h1 className="mainHeading">QUESTIONS AND ANSWERS</h1>
                <h1 className="subHeading">Write the questions and answers that came up</h1>
                <QnaInput />
                <AddButton />
            </div>
        </div>
    )
}

export default input