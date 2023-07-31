/* const Header = ({curso}) =>{
  return (
    <div>
      <h1>{curso.name}</h1>
    </div>
  )
}

const Content = ({parts}) =>{
  return(
    <div>
      <p>Part 1 {parts.parts[0].name}</p>
      <p>Part 2 {parts.parts[1].name}</p>
      <p>Part 3 {parts.parts[2].name}</p>
    </div>
  )
}

const Total = ({parts}) =>{
  return(
    <div>
      <p>
        Total was {parts.parts[0].exercises+parts.parts[1].exercises+parts.parts[2].exercises}
      </p>
    </div>
  )
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  console.log(course.parts[0].name)
  console.log(course.name)
  return (
    <div>
      <Header curso={course}/>
      <Content parts={course}/>
      <Total parts={course} />
    </div>
  )
}

export default App
*/
/*
const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>

      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}

export default App;

const App = ({counter}) => {
  
  return (
    <div>{counter}</div>
  )
}

export default App
*/
/*
APRENDIENDO A USAR EL USE STATE Y EL EVENT HANDLER
import { useState } from "react"

const Display = ({counter}) => {
  return (
    <div>{counter}</div>
  )
}

const Button = ({handleClick,text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const sumar = () => {
    console.log('increasing, value before', counter)
    setCounter(counter+2)
  }
 
  const cero = () => {
    console.log('CERO, value before', counter)
    setCounter(0)
  }

  return (
    <div>
      <Display counter={counter}/>
      <Button handleClick={sumar} text={"Sumar"}/>
      <Button handleClick={cero} text={"Cero"}/>
    </div>
  )
}
export default App
*/
import { useState } from "react"
const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  const [allClicks, setAll] = useState([])


  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }


  const handleRightClick = () => {
    console.log("Golpeaste el boton")
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text={"Left"}/>
      <Button handleClick={handleRightClick} text={"Right"}/>
      {right}

      <History allClicks={allClicks}/>
    </div>
  )
}

export default App