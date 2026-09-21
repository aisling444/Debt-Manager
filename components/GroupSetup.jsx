import useStore from '../store/useStore'
import { useState } from 'react'

function GroupSetup() {
  const people = useStore((state) => state.people)
  const addPerson = useStore((state) => state.addPerson)

  const [inputValue, setInputValue] = useState('')

  return (
    <div className="rounded-2xl bg-white/70 backdrop-blur-sm p-6 shadow-sm border border-[#DCC8F0]">
      <h2 className="mb-4 text-xl font-bold text-[#35145F]">
        Add People
      </h2>

      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter Name"
          className="flex-1 rounded-xl border-2 border-[#6B3A91] bg-white px-4 py-3 text-[#35145F] outline-none placeholder:text-[#9478AD] focus:border-[#35145F] focus:ring-2 focus:ring-[#C9A9E8]"
        />

        <button
          onClick={() => {
            addPerson(inputValue)
            setInputValue('')
          }}
          className="rounded-xl border-2 border-[#35145F] bg-[#6B3A91] px-6 py-3 font-bold text-white transition hover:bg-[#512476] active:translate-y-0.5"
        >
          Add Person
        </button>
      </div>

      <ul className="mt-5 space-y-2">
        {people.map((person) => (
          <li
            key={person.id}
            className="rounded-lg border border-[#C9A9E8] bg-[#E9DDF8] px-4 py-2 font-medium"
          >
            {person.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GroupSetup
