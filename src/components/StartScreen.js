import React from "react";
import logo from "./assets/88tour_logo.jpg"

const StartScreen = ({ onStart }) => (
  <div id="start-screen">
    <img src={logo} alt="로고" className="logo" />
    <h1 className="title">나만의 여행 성향 테스트</h1>
    <p className="subtitle">나의 여행 유형을 통해<br />나만의 여행을 디자인하라!</p>
    <button onClick={onStart}>여행 성향 테스트하기 ➡</button>
  </div>
);

export default StartScreen;