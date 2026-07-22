import useStore from '../store/useStore'
import { useState } from 'react'

function ExpenseLogger() {
    const people = useStore((state) => state.people)
    const addExpense = useStore((state) => state.addExpense)


    const [description, setDescription] = useState('')
    const [amount, setAmount] = useState('')
    const [paidBy, setPaidBy] = useState('')
    const [splitBetween, setSplitBetween] = useState([])

  return (
    <div>
        <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter Description" />
        <input value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter Amount" />
        <select value={paidBy} onChange={(e) => setPaidBy(e.target.value)}>
            <option value="">Select Person</option>
            {people.map((person) => (
                <option key={person.id} value={person.id}>
                    {person.name}
                </option>
            ))}
        </select>
        <div>
            {people.map((person) => (
                <label key={person.id}>
                    <input type="checkbox" checked={splitBetween.includes(person.id)} onChange={(e) => {
                        if (e.target.checked) {
                            setSplitBetween([...splitBetween, person.id])
                        } else {
                            setSplitBetween(splitBetween.filter((id) => id !== person.id))
                        }
                    }}
                    />
                    {person.name}
                </label>
            ))}
        </div>
        <button onClick={() => {
            addExpense({ description, amount: parseFloat(amount), paidBy, splitBetween })
            setDescription('')
            setAmount('')
            setPaidBy('')
            setSplitBetween([])
        }}>Add Expense</button>
    </div>
  )
}

export default ExpenseLogger