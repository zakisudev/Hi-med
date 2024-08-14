export type CategoryType = {
  id: string;
  name: string;
  description: string;
  image: string;
};

export type CategoriesState = {
  categories: CategoryType[] | null;
  message?: string;
};

export type CategoryContentType = {
  title: string;
  causes?: string[];
  counterFactors?: string[];
  riskFactors?: string[];
  lifestyleMeasures?: string[];
};

export type CategoryDataType = {
  id: string;
  name: string;
  description: string;
  content: CategoryContentType[];
  createdAt: string;
  updatedAt: string;
};

export type CategoryPageProps = {
  params: {
    slug: string;
  };
};