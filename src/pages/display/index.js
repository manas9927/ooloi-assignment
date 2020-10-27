import React from "react";
import DisplayFaq from "./displayFaq";
// import faqData from "./faqData"
import "../../myStyle.css";

function display() {
  // const faqComponent = faqData.map(qna => <DisplayFaq title={qna.title} content={qna.content}/> )
  return (
    <div className="componentBody">
      <div className="componentContainer">
        <h1 className="mainHeading">QUESTIONS AND ANSWERS</h1>
        <DisplayFaq />
        <DisplayFaq />
        <DisplayFaq />
        <DisplayFaq />
        {/* {faqComponent} */}
      </div>
    </div>
  );
}

export default display;
