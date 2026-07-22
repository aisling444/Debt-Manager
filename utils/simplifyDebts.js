export function simplifyDebts(expenses) {
  let netBalance = {};

  for (const expense of expenses) {
    const { paidBy, amount, splitBetween } = expense;
    const share = amount / splitBetween.length;
    if (netBalance[paidBy] === undefined) {
      netBalance[paidBy] = 0;
    }
    netBalance[paidBy] += amount;
    for (const person of splitBetween) {
      if (netBalance[person] === undefined) {
        netBalance[person] = 0;
      }
      netBalance[person] -= share;
    }
  }

  const debts = [];
  while(true){
    const maxCreditor = Object.keys(netBalance).reduce((a,b) => netBalance[a] > netBalance[b] ? a : b);
    const maxDebtor = Object.keys(netBalance).reduce((a,b) => netBalance[a] < netBalance[b] ? a : b);
    if(!maxCreditor || !maxDebtor) break;
    const amount = Math.min(netBalance[maxCreditor], -netBalance[maxDebtor]);
    if(amount === 0) break;
    debts.push({ from: maxDebtor, to: maxCreditor, amount });
    netBalance[maxCreditor] -= amount;
    netBalance[maxDebtor] += amount;
  }
  return debts;
}

