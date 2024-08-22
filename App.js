import './App.css';
import { useState } from 'react';

function App() {

  let [value,setValue]=useState('')
  let [result,setResult]=useState('')

  const handleNumberClick = (number) => {
    setValue(value + number)
  }

  const handleOperatorClick = (operator) => {
    setValue(value + operator)
  }

  const handleClearClick = () => {
    setValue('')
    setResult('')
  }

  const handleDeleteClick = () => {
    setValue(value.slice(0,-1))
  }

  const handleEqualClick = () => {
    let numbers = value.split(/[-+*/]/)
    let operators = value.match(/[-+*/]/g)

    let result = parseFloat(numbers[0])

    for (let i = 0; i < operators.length; i++) {
      switch (operators[i]) {
        case '+':
          result += parseFloat(numbers[i + 1])
          break;
        case '-':
          result -= parseFloat(numbers[i + 1])
          break;
        case '*':
          result *= parseFloat(numbers[i + 1])
          break;
        case '/':
          result /= parseFloat(numbers[i + 1])
          break;
        default:
          break;
      }
    }

    setResult(result.toString())
  }

  return (
    <div>
       
    <div className="container">
      <div className="calculator">
        <form action="">
          <div className='display'>
            <input type="text" value={value} readOnly/>
            <input type="text" value={result} readOnly/>
          </div>

          <div>
            <input type="button" value="AC" onClick={handleClearClick}/>
            <input type="button" value="DE" onClick={handleDeleteClick}/>
            <input type="button" value="." onClick={() => handleNumberClick('.')}/>
            <input type="button" value="/" onClick={() => handleOperatorClick('/')}/>
          </div>
          <div>
            <input type="button" value="7" onClick={() => handleNumberClick('7')}/>
            <input type="button" value="8" onClick={() => handleNumberClick('8')}/>
            <input type="button" value="9" onClick={() => handleNumberClick('9')}/>
            <input type="button" value="*" onClick={() => handleOperatorClick('*')}/>
          </div>

          <div>
            <input type="button" value="4" onClick={() => handleNumberClick('4')}/>
            <input type="button" value="5" onClick={() => handleNumberClick('5')}/>
            <input type="button" value="6" onClick={() => handleNumberClick('6')}/>
            <input type="button" value="+" onClick={() => handleOperatorClick('+')}/>
          </div>

          <div>
            <input type="button" value="1" onClick={() => handleNumberClick('1')}/>
            <input type="button" value="2" onClick={() => handleNumberClick('2')}/>
            <input type="button" value="3" onClick={() => handleNumberClick('3')}/>
            <input type="button" value="-" onClick={() => handleOperatorClick('-')}/>
          </div>

          <div>
            <input type="button" value="00" onClick={() => handleNumberClick('00')}/>
            <input type="button" value="0" onClick={() => handleNumberClick('0')}/>
            <input type="button" value="="  className='equal' onClick={handleEqualClick}/>
           
          </div>

        </form>
      </div>

    </div>
    </div>
  );
}

export default App;
