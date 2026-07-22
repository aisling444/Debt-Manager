import GroupSetup from './components/GroupSetup'
import ExpenseLogger from './components/ExpenseLogger'
import DebtList from './components/DebtList'

function App() {
  return (
    <div>
      <h1>Bill Splitter</h1>
      <GroupSetup />
      <ExpenseLogger />
      <DebtList />
    </div>
  )
}

export default App