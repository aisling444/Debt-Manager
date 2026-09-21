import { useState } from 'react'

function DebtRow({ debt, fromName, toName, onSettle }) {
  const [payAmount, setPayAmount] = useState(debt.amount)

  return (
    <div className="flex flex-col gap-4 rounded-xl border-2 border-[#C9A9E8] bg-[#E9DDF8] p-4 sm:flex-row sm:items-center sm:justify-between">
      <span className="font-semibold text-[#35145F]">
        {fromName} owes {toName}:{' '}
        <span className="font-extrabold">
          €{debt.amount.toFixed(2)}
        </span>
      </span>

      <div className="flex gap-2">
        <input
          type="number"
          value={payAmount}
          onChange={(e) => setPayAmount(parseFloat(e.target.value))}
          max={debt.amount}
          className="w-28 rounded-lg border-2 border-[#6B3A91] bg-white px-3 py-2 text-[#35145F] outline-none focus:border-[#35145F]"
        />

        <button
          onClick={() => onSettle(payAmount)}
          className="rounded-lg border-2 border-[#35145F] bg-[#6B3A91] px-5 py-2 font-bold text-white transition hover:bg-[#512476]"
        >
          Pay
        </button>
      </div>
    </div>
  )
}

export default DebtRow
