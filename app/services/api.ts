const BASE_URL = "https://hi-med.zakisu.com/api";

export const fetchCategories = async () => {
  const res = await fetch(`${BASE_URL}/categories`);

  if (!res.ok) {
    return null;
  }

  return await res.json();
};

export const fetchCategoryData = async (name: string) => {
  const res = await fetch(`${BASE_URL}/categories/${name}`);

  if (!res.ok) {
    return null;
  }

  return await res.json();
};