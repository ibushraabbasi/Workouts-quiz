import React, { useState } from "react";
import './App.css';


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
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const questions = [{
         text: "Which types of workouts are your favorites?",
         options: [
              {id: 0, text: "Strength"},
              {id: 1, text: "Yoga"},
              {id: 2, text: "Meditation"},
              {id: 3, text: "Stretching"}
          ],
      },
      {
          text: "What’s your experience level?",
          options: [
              {id: 0, text: "Beginner"},
              {id: 1, text: "Intermediate"},
              {id: 2, text: "Advanced"}
          ],
      },
      {
          text: "How long are your workouts?",
          options: [
              { id: 0, text: "5-20 mins"},
              { id: 1, text: "20-30 mins"},
              { id: 2, text: "30-40 mins"}
          ],
      },
      {
          text: "What workout accessories do you have available to use?",
          options: [
              {id: 0, text: "Light dumbbells"},
              {id: 1, text: "Medium dumbbells"},
              {id: 2, text: "Heavy dumbbells"},
              {id: 3, text: "Resistance bands"},
              {id: 4, text: "Workout mats"},
              {id: 5, text: "Yoga mats"},
              {id: 6, text: "Yoga blocks"},
              {id: 7, text: "Foam roller"},
              {id: 8, text: "None"}
          ],
      },
    ]
  const handleAnswerButtonClick = () => {
     const nextQuestion = currentQuestion + 1;
      if(nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else{
        setFinalResult(true);
      }
  };
  const handlebackButtonClick = () => {
    const nextQuestion = currentQuestion - 1;
     if(nextQuestion < questions.length) {
       setCurrentQuestion(nextQuestion);
     } else{
       setFinalResult(true);
     }
 };
  const restartQuiz = () => {
      setCurrentQuestion(0);
      setFinalResult(false);
  }
  const handleClick = () => {
    setIsActive(current => !current);
  }
  return (
      <div className="App">
        {showFinalResults ? (
        
          /* Final page  */
         <div className='final-result'>
             <h4>Top workouts for you</h4>
             <p>Based on your answers, here’s a list of classes we think might interest you.</p>
            <span><button onClick={() => restartQuiz()}>Restart Quiz</button></span>
            
             </div>
     ) : (
        <div className='question-card'> 
  
        {/* Question No*/}
        <h5>Question {currentQuestion + 1 } 0f {questions.length}</h5>
          {/* Questions*/}
       <h3 className='question-text'>{questions[currentQuestion].text}</h3>
       <div>
       <ul>
         {questions[currentQuestion].options.map((option) => {
          return (
           <li style={{
            backgroundColor: isActive ? 'salmon' : '',
            color: isActive ? 'white' : '',
          }}
           onClick={handleClick}
           key={option.id}>{option.text}</li>
        );
        })}
       </ul></div>
     {/* Button Next and back */}

        <button onClick={() => handlebackButtonClick()}>Back</button>
       <button onClick={() => handleAnswerButtonClick()}>Next</button>
      </div> 
    )}
    </div>
    );
  }
  export default App;
