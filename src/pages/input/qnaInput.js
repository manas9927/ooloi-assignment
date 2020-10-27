import React from "react";
import "../../myStyle.css";

function qnaInput() {
  return (
    <div className="gridContainer">
      <div className="question">
        <p>Q.</p>
      </div>
      <div className="answer">
        <p>A.</p>
      </div>
      <div className="inputQuestion">
        <input type="text" placeholder="Write Question Here..." />
      </div>
      <div className="inputAnswer">
        <input type="text" placeholder="Write Question Here..." />
      </div>
      <div className="ext">
        <button className="deleteButton">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="#64B5F6"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default qnaInput;
