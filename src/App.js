import React, { useState } from "react";
import './App.css';

function App() {

  const [showFinalResults, setFinalResult] = useState(false);



  return (
    <div className="App">
   
    <div className='question-card'> {/* Question No*/}
      <h5>Question 1 0f 5</h5>
      
      {/* Questions*/}
      <h3 className='question-text'>Which types of workouts are your favorites?</h3>
      <ul>
        <li>Strength </li>
        <li>Yoga</li>
        <li>Meditation</li>
        <li>Strength</li>
      </ul>
   
      {/* Button Next and back */}
      <button>Back</button>
      <button>Next</button>
      {/* Final page  */}
       <div className='final-result'>
           <h4>Top workouts for you</h4>
           <p>Based on your answers, here’s a list of classes we think might interest you.</p>
          
           <span><button>Restart Quiz</button></span>
           <span><button>Try Classes on the App</button></span>
           </div>
    </div> 
   </div>
  );
}

export default App;
