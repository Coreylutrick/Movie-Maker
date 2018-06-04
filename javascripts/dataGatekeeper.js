const data = require('./data');
const xhr = require('./xhrCalls');

const whenCategoriesLoad = function ()
{
  const categoryData = JSON.parse(this.responseText).categories;
  data.setCategories(categoryData);
};

const whenElementsLoad = function ()
{
  const movieElems = JSON.parse(this.responseText).elements;
  data.setMovieElements(movieElems);
};

const badLoad = function ()
{
  console.error('it broke');
};

const initializer = () =>
{
  xhr.loadCategories(whenCategoriesLoad, badLoad);
  xhr.loadElements(whenElementsLoad, badLoad);
};

module.exports = initializer;
