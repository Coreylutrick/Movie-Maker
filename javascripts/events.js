const data = require('./data');
const selectedElemList = require('./selectedElemDom');
const budgetBtn = document.getElementById('userBudget');
const checkBoxes = document.getElementsByClassName('check');
let movElems = [];

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

const checkedEvent = () =>
{
  for (let i = 0; i < checkBoxes.length; i++)
  {
    checkBoxes[i].addEventListener('change', function (e)
    {
      if (this.checked)
      {
        checkPrice(e);
      } else
      {
        removeElem(e);
      }
      selectedElemList(movElems);
    });
  };
};

const checkPrice = (e) =>
{
  const checkboxId = e.target.id;
  const elemArr = data.getMovieElements();
  elemArr.forEach((element) =>
  {
    if (element.id === checkboxId)
    {
      movElems.push(element);
      data.setCost({cost: element.cost, id: element.id,});
    }
  });
};

const removeElem = (e) =>
{
  const checkboxId = e.target.id;
  movElems = movElems.filter(e => e.id !== checkboxId);
  data.updateCost(checkboxId);
};

module.exports =
{
  retrieveBudget,
  checkedEvent,
};
