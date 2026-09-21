import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const useStore = create(
  persist(
    (set) => ({
      people: [],
      expenses: [],
      settlements: [],

      addPerson: (name) => set((state) => ({ people: [...state.people, { id: crypto.randomUUID(), name }] })),

      addExpense: ({ paidBy, amount, splitBetween, description }) => set((state) => ({ expenses: [...state.expenses, { id: crypto.randomUUID(), paidBy, amount, splitBetween, description }] })),

      settleDebt: ({ from, to, amount }) => set((state) => ({ settlements: [...state.settlements, { id: crypto.randomUUID(), from, to, amount }] })),
    }),
    {
      name: 'bill-splitter-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)

export default useStore