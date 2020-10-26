import React from "react"
import "../../myStyle.css"

function qnaInput() {
    return (
        <div>
            <div className="grid-container">
                <div className="question">
                    <p>Q.</p>
                </div>
                <div className="answer">
                    <p>A.</p>
                </div>
                <div className="inputQuestion">
                    <input type="text"  placeholder="Write Question Here..."/>
                </div>
                <div className="inputAnswer">
                    <input type="text"  placeholder="Write Question Here..."/>
                </div>
                <div className="delete">
                    <button className="deleteButton">
                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="trash-alt" className="svg-inline--fa fa-trash-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#64B5F6" d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"></path></svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default qnaInput