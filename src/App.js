/* eslint-disable default-case */
/* eslint-disable jsx-a11y/iframe-has-title */
import { useEffect, useState } from "react";
import "./App.css";
// import  {useFetch}  from '../src/hooks/useFetch'
import dbase from "../src/data/db.json"

function App() {
  // properties
  const [showFinalResults, setFinalResult] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [redcolor, setredColor] = useState("");
  const [readyData, setReadyData]= useState({
    question1: {},
    question2: {},
    question3: {},
    question4: {}
  });

  // For db.json data
//  const [url, setUrl] = useState('http://localhost:3000/list')
  //  const { data } = useFetch(url)
   const data = dbase.list
    
  const questions = [
    {
      text: "Which types of workouts are your favorites?",
      options: [
        { id: 0, workout: "Indoor Walking" },
        { id: 1, workout: "Sculpting" },
        { id: 2, workout: "Meditation" },
        { id: 3, workout: "Stretching" },
        { id: 4, workout: "HIIT Cardio" },
        { id: 5, workout: "Tread Bootcamp" },
      ],
    },
    {
      text: "What’s your experience level?",
      options: [
        { id: 0, experience: "Beginner" } ,
        { id: 1, experience: "Intermediate"},
        { id: 2, experience: "Advanced" },
      ],
    },
    {
      text: "How long are your workouts?",
      options: [
        { id: 0, duration: "5-20 mins" },
        { id: 1, duration: "20-30 mins" },
        { id: 2, duration: "30-40 mins" },
      ],
    },
    {
      text: "What workout accessories do you have available to use?",
      options: [
        { id: 0, accessories: "Light dumbbells"},
        { id: 1, accessories: "Medium dumbbells" },
        { id: 2, accessories: "Heavy dumbbells" },
        { id: 3, accessories: "Resistance bands" },
        { id: 4, accessories: "Workout mats" },
        { id: 5, accessories: "Yoga mats" },
        { id: 6, accessories: "Yoga blocks" },
        { id: 7, accessories: "Foam roller" },
        { id: 8, accessories: "None" },
      ],
    },
  ];
  // to store the selected options
  const found = (option) => {
    switch(currentQuestion) {
      case 1:
        setReadyData((prevState) => 
        ({
          ...prevState,
          question1: option
        }));
        break;
      case 2:
        setReadyData((prevState) => 
        ({
          ...prevState,
          question2: option
        }));
        break;
      case 3:
        setReadyData((prevState) => 
        ({
          ...prevState,
          question3: option
        }));
        break;
      case 4:
        setReadyData((prevState) => 
        ({
          ...prevState,
          question4: option
        }));
        break;
    }
  }
//compare four selected cards
useEffect(() => {
    if(readyData && data){
      if(JSON.stringify(readyData.workout) === JSON.stringify(data.workout)){
        console.log("match")
      } else{
        console.log("not matched")
      }
    } 
  },[readyData, data])
  console.log(readyData, data)

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
            <ul>
              {data.map(urrl =>(
                <li key={urrl.id}>
                  {/* <p>{found.videos}</p> */}
                  <iframe src={urrl.videos}/>
                </li>
              ))}
            </ul>
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
                    handleClick();  found(option);
                  }}
                    key={option.id}
                >
                  {option.workout}
                  {option.experience}
                  {option.duration}
                  {option.accessories}
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
