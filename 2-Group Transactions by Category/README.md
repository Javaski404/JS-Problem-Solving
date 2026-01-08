# 🟡 Group Transactions by Category

## 📌 Description
This problem focuses on aggregating data from an array of objects.

You are given a list of transactions, where each transaction has:
- `id` → Number  
- `category` → String  
- `amount` → Number  

Your task is to group transactions by `category` and calculate the **total amount** for each category.

---

## 🧾 Input
```js
const transactions = [
  { id: 1, category: "food", amount: 50 },
  { id: 2, category: "transport", amount: 20 },
  { id: 3, category: "food", amount: 30 },
  { id: 4, category: "shopping", amount: 100 },
  { id: 5, category: "transport", amount: 40 }
];

## 🧾 Output

{
  food: 80,
  transport: 60,
  shopping: 100
}
