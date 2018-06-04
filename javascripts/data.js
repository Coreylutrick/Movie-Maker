let categories = [];
let movieElems = [];
let budget = 0;

const getCategories = () =>
{
  return categories;
};

const setCategories = (categoryArray) =>
{
  categories = categoryArray;
};

const getMovieElements = () =>
{
  return movieElems;
};

const setMovieElements = (elementArray) =>
{
  movieElems = elementArray;
};

const getBudget = () =>
{
  return budget;
};

const setBudget = (userBudget) =>
{
  budget = userBudget;
};

module.exports =
{
  getCategories,
  setCategories,
  getMovieElements,
  setMovieElements,
  getBudget,
  setBudget,
};
