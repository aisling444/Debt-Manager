export function simplifyDebts(expenses, settlements = []) {
  if (!expenses || expenses.length === 0) return [];

  let netBalance = {};
  for (const expense of expenses) {
    const { paidBy, amount, splitBetween } = expense;
    const share = amount / splitBetween.length;
    if (netBalance[paidBy] === undefined) netBalance[paidBy] = 0;
    netBalance[paidBy] = Math.round((netBalance[paidBy] + amount) * 100) / 100;
    for (const person of splitBetween) {
      if (netBalance[person] === undefined) netBalance[person] = 0;
      netBalance[person] = Math.round((netBalance[person] - share) * 100) / 100;
    }
  }

  for (const s of settlements) {
    if (netBalance[s.from] === undefined) netBalance[s.from] = 0;
    if (netBalance[s.to] === undefined) netBalance[s.to] = 0;
    netBalance[s.from] += s.amount;
    netBalance[s.to] -= s.amount;
  }

  const debts = [];
  while(true){
    const maxCreditor = Object.keys(netBalance).reduce((a,b) => netBalance[a] > netBalance[b] ? a : b);
    const maxDebtor = Object.keys(netBalance).reduce((a,b) => netBalance[a] < netBalance[b] ? a : b);
    if(!maxCreditor || !maxDebtor) break;
    const amount = Math.min(netBalance[maxCreditor], -netBalance[maxDebtor]);
    if(amount === 0) break;
    debts.push({ from: maxDebtor, to: maxCreditor, amount });
    netBalance[maxCreditor] = Math.round((netBalance[maxCreditor] - amount) * 100) / 100
    netBalance[maxDebtor] = Math.round((netBalance[maxDebtor] + amount) * 100) / 100;
  }
  return debts;
}

