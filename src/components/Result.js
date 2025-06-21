import React from "react";

const Result = ({ scoreA, scoreB, onRestart }) => {
  let result = "";
  if (scoreA > scoreB) result = "💗 당신은 조심스럽고 감정에 충실한 연애 스타일을 선호합니다.";
  else if (scoreB > scoreA) result = "🔥 당신은 솔직하고 열정적인 연애 스타일을 좋아합니다!";
  else result = "🌈 당신은 상황에 따라 융통성 있게 연애하는 타입이에요.";

  return (
    <div id="result-screen">
      <h2>테스트 결과</h2>
      <p>{result}</p>
      <button onClick={onRestart}>다시 하기</button>
    </div>
  );
};

export default Result;
