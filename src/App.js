import React, { useState } from "react";
import './App.css';

function App() {
// properties

  const [showFinalResults, setFinalResult] = useState(false);

   return (
    <div className="App">
      {showFinalResults ? (
      
        /* Final page  */
       <div className='final-result'>
           <h4>Top workouts for you</h4>
           <p>Based on your answers, here’s a list of classes we think might interest you.</p>
          
           <span><button>Restart Quiz</button></span>
          
           </div>
   ) : (
      <div className='question-card'> 
      {/* Question No*/}
      <h5>Question 1 0f 5</h5>
       {/* Questions*/}
     <h3 className='question-text'>Which types of workouts are your favorites?</h3>
     <ul>
       <li>Strength </li>
       <li>Yoga</li>
       <li>Meditation</li>
       <li>Stretching</li>
     </ul>
     <h3 className='question-text'>What’s your experience level?</h3>
     <ul className="align">
       {/* <li>Beginner </li>
       <li>Intermediate</li>
       <li>Advanced</li> */}
        <span className="box">Beginner</span>
        <span className="box">Intermediate</span>
        <span className="box">Advanced</span>
     </ul>
     {/* <div className="questionno2">
     <span className="box">Beginner</span>
     <span className="box">Intermediate</span>
     <span className="box">Advanced</span>
     </div> */}
  
     <h3 className='question-text'>How long are your workouts?</h3>
     <ul>
       <li>5-20 mins</li>
       <li>20-30 mins</li>
       <li>30-40 mins</li>
     </ul>
     <h3 className='question-text'>What workout accessories do you have available to use?</h3>
     <ul>
       <li>Light dumbbells </li>
       <li>Medium dumbbells</li>
       <li>Heavy dumbbells</li>
       <li>Resistance bands</li>
       <li>Workout mats</li>
       <li>Yoga mats</li>
       <li>Yoga blocks</li>
       <li>Yoga strap</li>
       <li>Foam roller</li>
       <li>None</li>
       <button>Back</button>
       <button>Find Classes</button>
</ul>
     {/* Button Next and back */}
     <button>Back</button>
     <button>Next</button>
     </div> 
      
     ) }
      
   
     
    
   </div>
  );
}
export default App;
