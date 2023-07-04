/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  console.log(transactions);
  let n = transactions.length;
  console.log(n);
  var hm = new Map();
  for(let i = 0; i < n; i ++){
    let trans = transactions[i];
    if(!hm.has(trans.category)){
      hm.set(trans.category, 0);
    }
    hm.set(trans.category, hm.get(trans.category)+trans.price);
  }
  let arr = [];
  for(const [key, value] of hm.entries()){
    var obj = {"category" : key, "totalSpent": value};
    arr.push(obj);
  }
  return arr;
}

module.exports = calculateTotalSpentByCategory;
