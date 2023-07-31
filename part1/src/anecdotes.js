import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(8).fill(0))

   const HandleAnecdota = () =>{
    if(selected>=anecdotes.length-1){
        setSelected(0)
    }
    else{
        console.log("Seleccion ",selected)
        setSelected(selected+1)
    }
   } 
   const handleVotes = () =>{
    const newVotes = [...votes];
    newVotes[selected]+=1
    setVotes(newVotes)
   }  

   const { maxElement, maxIndex } = votes.reduce((acc, current, index) => {
    if (current > acc.maxElement) {
      return { maxElement: current, maxIndex: index };
    } else {
      return acc;
    }
  }, { maxElement: votes[0], maxIndex: 0 });
  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>La anectoda tiene {votes[selected]} votos</p>
      <button onClick={HandleAnecdota}>Siguiente</button>
      <button onClick={handleVotes}>Votar</button>
      <h2>La anectoda con mas votos es:</h2>
      <p>{anecdotes[maxIndex]}</p>
      <p>Tiene {maxElement} votos</p>

    </div>
  )
}

export default App