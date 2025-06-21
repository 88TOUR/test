import React, { useState } from "react";
import questions from "./data/questions";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import Result from "./components/Result";
import "./App.css";

function App() {
  const [step, setStep] = useState("start");
  const [current, setCurrent] = useState(0);
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);

  const startQuiz = () => setStep("quiz");

  const handleAnswer = (choice) => {
    if (choice === "A") setScoreA((prev) => prev + 1);
    else setScoreB((prev) => prev + 1);

    if (current + 1 < questions.length) {
      setCurrent((prev) => prev + 1);
    } else {
      setStep("result");
    }
  };

  const restart = () => {
    setStep("start");
    setCurrent(0);
    setScoreA(0);
    setScoreB(0);
  };

  return (
    <div className="container">
      <div className="center-box">
        {step === "start" && <StartScreen onStart={startQuiz} />}
        {step === "quiz" && (
          <Question
            question={questions[current]}
            index={current}
            total={questions.length}
            onAnswer={handleAnswer}
          />
        )}
        {step === "result" && (
          <Result scoreA={scoreA} scoreB={scoreB} onRestart={restart} />
        )}
      </div>
    </div>
  );
}

export default App;