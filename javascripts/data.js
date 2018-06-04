let categories = [];
let movieElems = [];

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

module.exports =
{
  getCategories,
  setCategories,
  getMovieElements,
  setMovieElements,
};
