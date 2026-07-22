import useStore from '../store/useStore'
import { simplifyDebts } from '../utils/simplifyDebts'

function DebtList() {
  const people = useStore((state) => state.people)
  const expenses = useStore((state) => state.expenses)
  const settleDebt = useStore((state) => state.settleDebt)

  const debts = simplifyDebts(expenses)

  return (
  <div>
    {debts.map((debt, index) => {
      const fromPerson = people.find((person) => person.id === debt.from)
      const toPerson = people.find((person) => person.id === debt.to)
      return (
        <div key={index}>
          <span>{fromPerson?.name} owes {toPerson?.name}: €{debt.amount.toFixed(2)}</span>
          <button onClick={() => settleDebt({ from: debt.from, to: debt.to, amount: debt.amount })}>
            Settle
          </button>
        </div>
      )
    })}
  </div>
)
}

export default DebtList