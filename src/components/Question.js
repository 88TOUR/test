import React from "react";

const Question = ({ question, onAnswer, index, total }) => (
  <div id="quiz-screen">
    <div className="question-num">{index + 1} / {total}</div>
    <div className="question-text">{question.text}</div>
    <button onClick={() => onAnswer("A")} className="choice-btn">{question.a}</button>
    <button onClick={() => onAnswer("B")} className="choice-btn">{question.b}</button>
  </div>
);

export default Question;