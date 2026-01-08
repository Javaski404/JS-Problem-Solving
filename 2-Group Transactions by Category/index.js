const transactions = [
  { id: 1, category: "food", amount: 50 },
  { id: 2, category: "transport", amount: 20 },
  { id: 3, category: "food", amount: 30 },
  { id: 4, category: "shopping", amount: 100 },
  { id: 5, category: "transport", amount: 40 }
];

const categoryTotals = transactions.reduce((totals, transaction) => {
  const { category, amount } = transaction;
    if(!totals[category]) {
        totals[category] = 0;
    }
    totals[category] += amount;
    return totals;
}, {});

console.log(categoryTotals);