/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  // properties
  const [showFinalResults, setFinalResult] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [redcolor, setredColor] = useState("");
//  const [data, setData] = useState([]);
//  const [url, setUrl] = useState('http://localhost:3000/list')

  // useEffect(() => {
  //   fetch(url)
  //   .then(res => res.json())
  //   .then(json => setData(json))
  // }, [url])

// console.log(data);

  const questions = [
    {
      text: "Which types of workouts are your favorites?",
      options: [
        { id: 0, text: "Indoor running" },
        { id: 1, text: "Sculpting" },
        { id: 2, text: "Meditation" },
        { id: 3, text: "Stretching" },
        { id: 4, text: "HIIT Cardio" },
        { id: 5, text: "Tread Bootcamp" },
      ],
    },
    {
      text: "What’s your experience level?",
      options: [
        { id: 0, text: "Beginner" },
        { id: 1, text: "Intermediate" },
        { id: 2, text: "Advanced" },
      ],
    },
    {
      text: "How long are your workouts?",
      options: [
        { id: 0, text: "5-20 mins" },
        { id: 1, text: "20-30 mins" },
        { id: 2, text: "30-40 mins" },
      ],
    },
    {
      text: "What workout accessories do you have available to use?",
      options: [
        { id: 0, text: "Light dumbbells" },
        { id: 1, text: "Medium dumbbells" },
        { id: 2, text: "Heavy dumbbells" },
        { id: 3, text: "Resistance bands" },
        { id: 4, text: "Workout mats" },
        { id: 5, text: "Yoga mats" },
        { id: 6, text: "Yoga blocks" },
        { id: 7, text: "Foam roller" },
        { id: 8, text: "None" },
      ],
    },
  ];
  const found = () => {
    questions.find(obj => {
      return obj.options;
    });
  }
  console.log(found);

// console.log(Object.values(questions));


  const handleAnswerButtonClick = () => {
    setCurrentQuestion(currentQuestion + 1);
    setredColor("")
};

  const handlebackButtonClick = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const restartQuiz = () => {
    setCurrentQuestion(1);
    setFinalResult(false);
  };
  const handleClick = (e) => {
    setredColor("#FF9494")
  };
  const onFinsh = () => {
    setFinalResult(true);
    setredColor("#FF9494")
};
return (
    <div className="App">
      {showFinalResults ? (
        <div className="final-result">
          <h4>Top workouts for you</h4>
          <p>
            Based on your answers, here's a list of classes we think might
            interest you.
          </p>
          <div className="filter">
            {/* {" "}
            <iframe
              height="480"
              width="500"
              src="https://www.youtube.com/embed/4C-gxOE0j7s"
            ></iframe>{" "} */}
          </div>
          <span>
            <button onClick={() => restartQuiz()}>Restart Quiz</button>
          </span>
        </div>
      ) : (
        <div className="question-card">
          <h5>
            Question {currentQuestion} of {questions.length}
          </h5>

          <h3 className="question-text">
            {questions[currentQuestion - 1].text}
          </h3>
          <div>
            {questions[currentQuestion - 1].options.map((option) => {
              return (
                <button
                  className="button2"
                  onClick={() => {
                    handleClick();  found();
                  }}
                    key={option.id}
                >
                  {option.text}
                </button>
              );
            })}
          </div>
          <span>
            <button
            className="backbtn"
              onClick={handlebackButtonClick}
              disabled={currentQuestion === 1 ? true : false}
            > Back </button>
          </span>
           {currentQuestion === questions.length ? (
            <span>
              <button onClick={() => 
                onFinsh()} 
                style={{backgroundColor:redcolor}}>
                  Finsh
                  </button>
            </span>
          ) : (
            <span>
              <button onClick={() => handleAnswerButtonClick()} style={{backgroundColor:redcolor}}>Next</button>
            </span>
          )}
    
        </div>
      )}
    </div>
  );
}
export default App;
