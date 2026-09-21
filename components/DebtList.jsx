import useStore from '../store/useStore'
import { simplifyDebts } from '../utils/simplifyDebts'
import DebtRow from './DebtRow'

function DebtList() {
  const people = useStore((state) => state.people)
  const expenses = useStore((state) => state.expenses)
  const settleDebt = useStore((state) => state.settleDebt)
  const settlements = useStore((state) => state.settlements)

  const debts = simplifyDebts(expenses, settlements)

  return (
    <div className="rounded-2xl bg-white/70 backdrop-blur-sm p-6 shadow-sm border border-[#DCC8F0]">
      <h2 className="mb-4 text-xl font-bold text-[#35145F]">Debts</h2>
      <div className="flex flex-col gap-3">
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
    </div>
  )
}

export default DebtList