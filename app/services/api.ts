const BASE_URL = "http://localhost:3000/api";

export const fetchCategories = async () => {
  const res = await fetch(`${BASE_URL}/categories`);
  return res.json();
};

export const fetchCategoryData = async (name: string) => {
  const res = await fetch(`${BASE_URL}/categories/${name}`);

  if (!res.ok) {
    console.log(res);
    return null;
  }

  return await res.json();
};