import GroupSetup from './components/GroupSetup'
import ExpenseLogger from './components/ExpenseLogger'
import DebtList from './components/DebtList'

function App() {
  return (
    <div className="min-h-screen bg-[#F0E8FB] px-4 py-10 text-[#35145F] overflow-x-hidden">
      <div className="mx-auto max-w-3xl flex flex-col gap-6">
        <h1 className="mb-10 text-center text-4xl font-extrabold tracking-tight text-[#35145F]">
          Bill Splitter
        </h1>
          <GroupSetup />
          <ExpenseLogger />
          <DebtList />
      </div>
    </div>
  )
}

export default App
