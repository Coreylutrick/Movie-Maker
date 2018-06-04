const data = require('./data');
const xhr = require('./xhrCalls');
const catDom = require('./CatDom');

let categories = [];

const setCategories = (categoryArray) =>
{
  categories = categoryArray;
};

const whenCategoriesLoad = function ()
{
  const categoryData = JSON.parse(this.responseText).categories;
  setCategories(categoryData);
};

const whenElementsLoad = function ()
{
  const movieElems = JSON.parse(this.responseText).elements;
  data.setMovieElements(movieElems);
  catDom(movieElems, categories);
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
