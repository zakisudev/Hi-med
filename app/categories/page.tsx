import Head from 'next/head';
import CategoryCard from '@/components/CategoryCard';
import Spinner from '@/components/ui/Spinner';
import { fetchCategories } from '../services/api';
import Link  from 'next/link';

export default async function Category() {
  const categories = await fetchCategories()

  return (
    <div className="min-h-screen flex-col flex justify-center items-center w-full">
      <main className="flex-1 flex flex-col w-full justify-start items-center">
        <section className="flex w-full h-[250px] lg:h-[450px]">
          <div
            className="flex h-full w-full justify-center items-center bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/Category.png)' }}
          >
            <h2 className="text-center text-responsiveHeader font-bold text-gray-200">Categories</h2>
          </div>
        </section>
        <div className="flex px-5 2xl:px-0">
          {categories ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-[1460px] mx-auto place-items-center my-20">
                {categories && Array.isArray(categories) && categories.length > 0 && categories?.map((cat: any) => (
                  <CategoryCard
                    key={cat.id}
                    imgSrc={"/categ-01.png"}
                    title={cat.name}
                    description={cat.description}
                    link={`${cat.name?.toLowerCase()}`}
                  />
                ))}
              </div>
            ) : (
              <Spinner />
          )}
        </div>
      </main>
    </div>
  );
}