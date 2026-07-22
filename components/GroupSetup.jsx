import useStore from '../store/useStore'
import { useState } from 'react'

function GroupSetup(){
    const people = useStore((state) => state.people)
    const addPerson = useStore((state) => state.addPerson)

    const [inputValue, setInputValue] = useState('')

  return (
    <div>
      <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Enter Name" />
        <button onClick={() => { addPerson(inputValue); setInputValue('') }}>Add Person</button>
        <ul>
            {people.map((person) => (
                <li key={person.id}>{person.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default GroupSetup