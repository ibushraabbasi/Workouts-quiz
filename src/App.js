/* eslint-disable default-case */
/* eslint-disable jsx-a11y/iframe-has-title */
import { useState } from "react";
import "./App.css";
// import  {useFetch}  from '../src/hooks/useFetch'
import dbase from "../src/data/db.json"

function App() {
  // properties
  const [showFinalResults, setFinalResult] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [redcolor, setredColor] = useState("");
  const [urls, setUrls]= useState([]);
  const [answers, setAnswers]= useState({
    workout: "",
    experience: "",
    duration: "",
    accessories: ""
  });

  // For db.json data
  // const [url, setUrl] = useState('http://localhost:3000/list')
  // const { data } = useFetch(url)
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
      text: "What's your experience level?",
      options: [
        { id: 0, experience: "Beginner" } ,
        { id: 1, experience: "Intermediate"},
        { id: 2, experience: "Advanced" },
      ],
    },
    {
      text: "How long are your workouts?",
      options: [
        { id: 0, duration: "5-20 Minutes" },
        { id: 1, duration: "20-30 Minutes" },
        { id: 2, duration: "30-45 Minutes" },
      ],
    },
    {
      text: "What workout accessories do you have available to use?",
      options: [
        { id: 0, accessories: "Light Dumbbells"},
        { id: 1, accessories: "Medium Dumbbells" },
        { id: 2, accessories: "Heavy Dumbbells" },
        { id: 3, accessories: "Resistance Bands" },
        { id: 4, accessories: "Workout Mat" },
        { id: 5, accessories: "Yoga Mat" },
        { id: 6, accessories: "Yoga Blocks" },
        { id: 7, accessories: "Foam Roller" },
        { id: 8, accessories: "None" },
      ],
    },
  ];
  
  // to store the selected options
  const found = (option) => {
    switch(currentQuestion) {
      case 1:
        setAnswers((prevState) => 
        ({
          ...prevState,
          workout: option.workout
        }));
        break;
      case 2:
        setAnswers((prevState) => 
        ({
          ...prevState,
          experience: option.experience
        }));
        break;
      case 3:
        setAnswers((prevState) => 
        ({
          ...prevState,
          duration: option.duration
        }));
        break;
      case 4:
        setAnswers((prevState) => 
        ({
          ...prevState,
          accessories: option.accessories
        }));
        break;
    }
  }
  // useEffect(() => {  
  //   console.log("answers",answers, data)
  // },[answers, data])

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
  
  //match function
  // eslint-disable-next-line array-callback-return
  const comparsionAnswer = () => {
    for (let i = 0; i < data.length; i++) {
      const item = data[i] 
      if (item.workout === answers.workout &&
        item.experience === answers.experience &&
        item.duration === answers.duration &&
        item.accessories === answers.accessories) {
          setUrls(oldArray => [...oldArray, item.videos])
      }
    }
  }
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
              {urls.map((item,index) =>(
                <li key={index}>
                  {/* <p>{found.videos}</p> */}
                  <iframe src={item}/>
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
              <button onClick={() => {
                onFinsh() ; comparsionAnswer()}} 
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
