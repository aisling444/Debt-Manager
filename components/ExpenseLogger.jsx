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
    <div className="rounded-2xl border-2 border-[#4B2475] bg-[#F5EEFC] p-6 shadow-[5px_5px_0px_#4B2475]">
      <h2 className="mb-4 text-xl font-bold text-[#35145F]">
        Add Expense
      </h2>

      <div className="grid gap-4 sm:grid-cols-2">
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter Description"
          className="rounded-xl border-2 border-[#6B3A91] bg-white px-4 py-3 text-[#35145F] outline-none placeholder:text-[#9478AD] focus:border-[#35145F] focus:ring-2 focus:ring-[#C9A9E8]"
        />

        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter Amount"
          type="number"
          className="rounded-xl border-2 border-[#6B3A91] bg-white px-4 py-3 text-[#35145F] outline-none placeholder:text-[#9478AD] focus:border-[#35145F] focus:ring-2 focus:ring-[#C9A9E8]"
        />

        <select
          value={paidBy}
          onChange={(e) => setPaidBy(e.target.value)}
          className="rounded-xl border-2 border-[#6B3A91] bg-white px-4 py-3 text-[#35145F] outline-none focus:border-[#35145F] focus:ring-2 focus:ring-[#C9A9E8]"
        >
          <option value="">Select Person</option>

          {people.map((person) => (
            <option key={person.id} value={person.id}>
              {person.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <p className="mb-3 font-bold text-[#35145F]">
          Split Between
        </p>

        <div className="grid gap-2 sm:grid-cols-2">
          {people.map((person) => (
            <label
              key={person.id}
              className="flex cursor-pointer items-center gap-3 rounded-lg border border-[#C9A9E8] bg-[#E9DDF8] px-4 py-3 transition hover:bg-[#DCC8F0]"
            >
              <input
                type="checkbox"
                checked={splitBetween.includes(person.id)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSplitBetween([...splitBetween, person.id])
                  } else {
                    setSplitBetween(
                      splitBetween.filter((id) => id !== person.id)
                    )
                  }
                }}
                className="h-4 w-4 accent-[#6B3A91]"
              />

              <span className="font-medium">
                {person.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      <button
        onClick={() => {
          addExpense({
            description,
            amount: parseFloat(amount),
            paidBy,
            splitBetween,
          })

          setDescription('')
          setAmount('')
          setPaidBy('')
          setSplitBetween([])
        }}
        className="mt-6 w-full rounded-xl border-2 border-[#35145F] bg-[#6B3A91] px-6 py-3 font-bold text-white transition hover:bg-[#512476] active:translate-y-0.5"
      >
        Add Expense
      </button>
    </div>
  )
}

export default ExpenseLogger
