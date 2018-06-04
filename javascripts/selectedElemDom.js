const data = require('./data');

const printToDomTwo = (divId, string) =>
{
  document.getElementById(divId).innerHTML = string;
  data.costTotal();
};

const selectedElemList = (movieElems) =>
{
  const maxCost = data.costTotal();
  let string = '';
  movieElems.forEach((element) =>
  {
    string += `<p>${element.name} - $${element.cost}</p>`;
  });
  string += `<div class='movieCost'>`;
  string +=   `<h1>Amount Spent - $${maxCost}</h1>`;
  string += `</div>`;
  printToDomTwo('selecetedElems', string);
};

module.exports = selectedElemList;
