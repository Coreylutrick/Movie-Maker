const outputDiv = document.getElementById('checkBoxes');

const printToDom = (categories) =>
{
  outputDiv.innerHTML = domString(categories, movieElems);
};

const domString = (categories) =>
{
  let string = '';
  categories.forEach(category =>
  {
    string += `<div id='${category.id}'>`;
    string += ``;
  });
};

module.exports = printToDom;
