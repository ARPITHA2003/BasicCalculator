import './App.css';
import { useState } from 'react';

function App() {

  let [value,setValue]=useState('')
  return (
    <div>
       
    <div className="container">
      <div className="calculator">
        <form action="">
          <div className='display'>
            <input type="text" value={value} readOnly/>
          </div>

          {/* on clicking the button an eventObj is passed which has target,
          it refers to the element that triggered the event which has property value to access its value */}
          <div>
            <input type="button" value="AC" onClick={eventObj=>setValue('')}/>
            <input type="button" value="DE" onClick={eventObj=>setValue(value.slice(0,-1))}/>
            <input type="button" value="." onClick={eventObj=>setValue(value + eventObj.target.value)}/>
            <input type="button" value="/" onClick={eventObj=>setValue(value + eventObj.target.value)}/>
          </div>
          <div>
            <input type="button" value="7" onClick={eventObj=>setValue(value + eventObj.target.value)}/>
            <input type="button" value="8" onClick={eventObj=>setValue(value + eventObj.target.value)}/>
            <input type="button" value="9" onClick={eventObj=>setValue(value + eventObj.target.value)}/>
            <input type="button" value="*" onClick={eventObj=>setValue(value + eventObj.target.value)}/>
          </div>

          <div>
            <input type="button" value="4" onClick={eventObj=>setValue(value + eventObj.target.value)}/>
            <input type="button" value="5" onClick={eventObj=>setValue(value + eventObj.target.value)}/>
            <input type="button" value="6" onClick={eventObj=>setValue(value + eventObj.target.value)}/>
            <input type="button" value="+" onClick={eventObj=>setValue(value + eventObj.target.value)}/>
          </div>

          <div>
            <input type="button" value="1" onClick={eventObj=>setValue(value + eventObj.target.value)}/>
            <input type="button" value="2" onClick={eventObj=>setValue(value + eventObj.target.value)}/>
            <input type="button" value="3" onClick={eventObj=>setValue(value + eventObj.target.value)}/>
            <input type="button" value="-" onClick={eventObj=>setValue(value + eventObj.target.value)}/>
          </div>

          <div>
            <input type="button" value="00" onClick={eventObj=>setValue(value + eventObj.target.value)}/>
            <input type="button" value="0" onClick={eventObj=>setValue(value + eventObj.target.value)}/>
            <input type="button" value="="  className='equal'onClick={eventObj=>setValue(eval(value))}/>
           
          </div>

        </form>
      </div>

    </div>
    </div>
  );
}

export default App;
