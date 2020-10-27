import React, { useState } from "react";
import "../../myStyle.css";

function DisplayFaq() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="gridContainer">
        <div className="question">
          <p>Q.</p>
        </div>
        {isOpen && (
          <div className="answer">
            <p>A.</p>
          </div>
        )}
        <div className="displayQuestion">
          {/* <p>{props.title}</p> */}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit
            sagittis ex at euismod. Ut iaculis urna et felis pulvinar.
          </p>
        </div>
        {isOpen && (
          <div className="displayAnswer">
            {/* <p>{props.content}</p> */}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              suscipit sagittis ex at euismod. Ut iaculis urna et felis
              pulvinar.
            </p>
          </div>
        )}
        <div className="ext">
          <button
            className="indicatorButton"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen && (
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="#64B5F6"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 15l7-7 7 7"
                ></path>
              </svg>
            )}
            {!isOpen && (
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="#64B5F6"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>
      <hr className="faqEnd" />
    </div>
  );
}

export default DisplayFaq;
