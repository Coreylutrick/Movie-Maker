const data = require('./data');
const budgetBtn = document.getElementById('userBudget');

const displayBudget = (input) =>
{
  const budgetDisplay = document.getElementById('budget');
  let string = '';
  string += `<h1>$${input}</h1>`;
  budgetDisplay.innerHTML = string;
};

const retrieveBudget = () =>
{
  let budget = 0;
  budgetBtn.addEventListener('click', () =>
  {
    const budgetInput = document.getElementById('budgetInput').value;
    budget = budgetInput;
    displayBudget(budget);
    data.setBudget(budget);
  });
};

module.exports = retrieveBudget;
