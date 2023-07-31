import { useState } from 'react'


const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )

const Statics = ({good,neutral,bad}) => {
  const all = good+neutral+bad
  const average = Math.abs(good-bad)/all
  const positive = good/all
    if (good===0 && bad===0) {
      return(
        <div>
        <h2>No feedback given</h2>
        </div>
      )
    }
    return(
      <div>
        <h1>Statics</h1>
        <table>
          <tr>
            <td>
              Good:
            </td>
            <td>
              {good}
            </td>
          </tr>
          <tr>
            <td>
              Neutral:
            </td>
            <td>
              {neutral}
            </td>
          </tr>
          <tr>
            <td>
              Bad:
            </td>
            <td>
              {bad}
            </td>
          </tr>
          <tr>
            <td>
              Total:
            </td>
            <td>
              {all}
            </td>
          </tr>
          <tr>
            <td>
              Average:
            </td>
            <td>
              {average}
            </td>
          </tr>
          <tr>
            <td>
              Positive:
            </td>
            <td>
              {positive}
            </td>
          </tr>
        </table>
      </div>
    )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () =>{
    setGood(good+1)
  }
  const handleNeutral = () =>{
    setNeutral(neutral+1)
  }
  const handleBad = () =>{
    setBad(bad+1)
  }
  
  
  return (
    <div>
    <h1>Give Feedback</h1>
    <Button handleClick={handleGood} text={"Good"}/>
    <Button handleClick={handleNeutral} text={"Neutral"}/>
    <Button handleClick={handleBad} text={"Bad"}/>   
    <Statics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App