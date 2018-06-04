const checkboxEvent = require('./events');
const outputDiv = document.getElementById('left');

const printToDomCat = (movieElem, categories) =>
{
  outputDiv.innerHTML = domString(movieElem, categories);
  checkboxEvent.checkedEvent();
};

const domString = (movieElem, categories) =>
{
  let string = '';
  string += `<div class='movieParts'>`;
  categories.forEach((category) =>
  {
    string +=   `<div class='cat' id='${category.id}'>`;
    string +=     `<h2>${category.categoryName}</h2>`;
    string +=     `<div class='row boxes'>`;
    movieElem.forEach ((element) =>
    {
      if (element.categoryId === category.id)
      {
        string += `<div class='elemOptions col-s-4'>`;
        string +=   `<input type='checkbox' class='check' id=${element.id}>`;
        string +=   `<label class='option'>${element.name}</label>`;
        string += `</div>`;
      }
    });
    string +=     `</div>`;
    string +=   `</div>`;
  });
  string += `</div>`;
  return string;
};

module.exports = printToDomCat;
