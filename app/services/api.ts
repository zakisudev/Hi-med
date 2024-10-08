const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/api'
    : 'https://hi-med.zakisu.com/api';

export const fetchCategories = async () => {
  const res = await fetch(`${BASE_URL}/categories`);

  if (!res.ok) {
    return 'An error occurred while fetching categories';
  }

  return await res.json();
};

export const fetchCategoryData = async (name: string) => {
  const res = await fetch(`${BASE_URL}/categories/${name}`);

  if (!res.ok) {
    return 'An error occurred while fetching category data';
  }

  return await res.json();
};
