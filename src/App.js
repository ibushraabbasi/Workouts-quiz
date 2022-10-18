import { useEffect, useState } from "react";
import "./App.css";
import  {useFetch}  from '../src/hooks/useFetch'

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
 const [url, setUrl] = useState('http://localhost:3000/list')
const { data } = useFetch(url)

  const questions = [
    {
      text: "Which types of workouts are your favorites?",
      options: [
        { id: 0, text: "Indoor Walking" },
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
        { id: 0, text: "Beginner" ,matched:false} ,
        { id: 1, text: "Intermediate" ,matched:false},
        { id: 2, text: "Advanced" ,matched:false},
      ],
    },
    {
      text: "How long are your workouts?",
      options: [
        { id: 0, text: "5-20 mins" ,matched:false},
        { id: 1, text: "20-30 mins" ,matched:false},
        { id: 2, text: "30-40 mins" ,matched:false},
      ],
    },
    {
      text: "What workout accessories do you have available to use?",
      options: [
        { id: 0, text: "Light dumbbells" ,matched:false},
        { id: 1, text: "Medium dumbbells" ,matched:false},
        { id: 2, text: "Heavy dumbbells" ,matched:false},
        { id: 3, text: "Resistance bands" ,matched:false},
        { id: 4, text: "Workout mats" ,matched:false},
        { id: 5, text: "Yoga mats" ,matched:false},
        { id: 6, text: "Yoga blocks" ,matched:false},
        { id: 7, text: "Foam roller" ,matched:false},
        { id: 8, text: "None" ,matched:false},
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
    if(readyData && url){
    if(readyData.text === data){
      setFinalResult(prevState => {
        return prevState.map(state =>{
          if(state.text === data){
             return {...state, matched:true}
          } else {
            return state
          }
        })
      })
      
    } 
    }
  },[readyData, data])
console.log(data)

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
                  <p></p>
                  <iframe  X-frame-Options = 'same orgins' src={urrl.videos}/>
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
