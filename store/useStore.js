import { create } from 'zustand'

const useStore = create((set) => ({
  people: [],
  expenses: [],
  settlements: [],

  addPerson: (name) => set((state) => ({ people: [...state.people, {id: crypto.randomUUID(), name }], })),

  addExpense: ({ paidBy, amount, splitBetween, description }) => set((state) => ({ expenses: [...state.expenses, { id: crypto.randomUUID(), paidBy, amount, splitBetween, description, }, ], })),

  settleDebt: ({ from, to, amount }) => set((state) => ({ settlements: [...state.settlements, { id: crypto.randomUUID(), from, to, amount, }, ], })),
}))

export default useStore