import useStore from '../store/useStore'
import { simplifyDebts } from '../utils/simplifyDebts'
import DebtRow from './DebtRow'

function DebtList() {
  const people = useStore((state) => state.people)
  const expenses = useStore((state) => state.expenses)
  const settleDebt = useStore((state) => state.settleDebt)
  const settlements = useStore((state) => state.settlements)

  const adjustedExpenses = [
    ...expenses,
    ...settlements.map(s => ({
      paidBy: s.to,
      amount: s.amount,
      splitBetween: [s.from],
    }))
  ]

  const debts = simplifyDebts(adjustedExpenses)

  return (
    <div>
      {debts.map((debt, index) => {
        const fromPerson = people.find((person) => person.id === debt.from)
        const toPerson = people.find((person) => person.id === debt.to)
        return (
          <DebtRow
            key={index}
            debt={debt}
            fromName={fromPerson?.name}
            toName={toPerson?.name}
            onSettle={(amount) => settleDebt({ from: debt.from, to: debt.to, amount })}
          />
        )
      })}
    </div>
  )
}

export default DebtList