import { useState } from 'react'

function DebtRow({ debt, fromName, toName, onSettle }) {
  const [payAmount, setPayAmount] = useState(debt.amount)

  return (
    <div>
      <span>{fromName} owes {toName}: €{debt.amount.toFixed(2)}</span>
      <input
        type="number"
        value={payAmount}
        onChange={(e) => setPayAmount(parseFloat(e.target.value))}
        max={debt.amount}
      />
      <button onClick={() => onSettle(payAmount)}>Pay</button>
    </div>
  )
}

export default DebtRow