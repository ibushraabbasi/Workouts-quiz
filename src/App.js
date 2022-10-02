/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";
import "./App.css";

// function App() {

// // properties
// const [showFinalResults, setFinalResult] = useState(false);
// const [currentQuestion, setCurrentQuestion] = useState(0);

// const questions = [{
//        text: "Which types of workouts are your favorites?",
//        options: [
//             {id: 0, text: "Strength"},
//             {id: 1, text: "Yoga"},
//             {id: 2, text: "Meditation"},
//             {id: 3, text: "Stretching"}
//         ],
//     },
//     {
//         text: "What’s your experience level?",
//         options: [
//             {id: 0, text: "Beginner"},
//             {id: 1, text: "Intermediate"},
//             {id: 2, text: "Advanced"}
//         ],
//     },
//     {
//         text: "How long are your workouts?",
//         options: [
//             { id: 0, text: "5-20 mins"},
//             { id: 1, text: "20-30 mins"},
//             { id: 2, text: "30-40 mins"}
//         ],
//     },
//     {
//         text: "What workout accessories do you have available to use?",
//         options: [
//             {id: 0, text: "Light dumbbells"},
//             {id: 1, text: "Medium dumbbells"},
//             {id: 2, text: "Heavy dumbbells"},
//             {id: 3, text: "Resistance bands"},
//             {id: 4, text: "Workout mats"},
//             {id: 5, text: "Yoga mats"},
//             {id: 6, text: "Yoga blocks"},
//             {id: 7, text: "Foam roller"},
//             {id: 8, text: "None"}
//         ],
//     },
//   ]

// return (
//     <div className="App">
//       {showFinalResults ? (

//         /* Final page  */
//        <div className='final-result'>
//            <h4>Top workouts for you</h4>
//            <p>Based on your answers, here’s a list of classes we think might interest you.</p>

//            <span><button>Restart Quiz</button></span>

//            </div>
//    ) : (
//       <div className='question-card'>
//        {/* Question No*/}
//       <h5>Question {currentQuestion + 1 } 0f {questions.length}</h5>

//        {/* Questions*/}
//      <h3 className='question-text'>{questions[currentQuestion].text}</h3>
//      <ul>
//       {questions[currentQuestion].options.map((option) => {
//         return (
//           <li key={option.id}>{option.text}</li>
//         );
//       })}
//      </ul>
//    {/* Button Next and back */}
//       <button>Back</button>
//      <button >Next</button>
//     </div>
//   )}
//   </div>
//   );
// }
// export default App;
function App() {
  // properties
  const [showFinalResults, setFinalResult] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [redcolor, setredColor] = useState("");

  const questions = [
    {
      text: "Which types of workouts are your favorites?",
      options: [
        { id: 0, text: "Strength" },
        { id: 1, text: "Yoga" },
        { id: 2, text: "Meditation" },
        { id: 3, text: "Stretching" },
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
          <div>
            {" "}
            <iframe
              height="480"
              width="500"
              src="https://www.youtube.com/embed/4C-gxOE0j7s"
            ></iframe>{" "}
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

                  onClick={handleClick}
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
            >
              Back
            </button>
          </span>

          {currentQuestion === questions.length ? (
            <span>
              <button onClick={() => onFinsh()} style={{backgroundColor:redcolor}}>Finsh</button>
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
