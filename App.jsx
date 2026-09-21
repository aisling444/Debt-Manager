import GroupSetup from './components/GroupSetup'
import ExpenseLogger from './components/ExpenseLogger'
import DebtList from './components/DebtList'

function App() {
  return (
    <div className="min-h-screen bg-[#E9DDF8] px-4 py-10 text-[#35145F]">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-10 text-center text-4xl font-extrabold tracking-tight text-[#35145F]">
          Bill Splitter
        </h1>

        <div className="space-y-6">
          <GroupSetup />
          <ExpenseLogger />
          <DebtList />
        </div>
      </div>
    </div>
  )
}

export default App
