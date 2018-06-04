let categories = [];
let movieElems = [];
let budget = 0;
let movieCost = [];
let totalCost = 0;

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

const setCost = (updtCost) =>
{
  movieCost.push(updtCost);
};

const getCost = () =>
{
  return movieCost;
};

const updateCost = (badId) =>
{
  movieCost = movieCost.filter(c => c.id !== badId);
};

const costTotal = () => {
  totalCost = movieCost.reduce((totalCost, movieCost) => {
    return totalCost + movieCost.cost;
  }, 0);
  return totalCost;
};

const getMaxCost = () =>
{
  return totalCost;
};

module.exports =
{
  getCategories,
  setCategories,
  getMovieElements,
  setMovieElements,
  getBudget,
  setBudget,
  getCost,
  setCost,
  updateCost,
  costTotal,
  getMaxCost,
};
