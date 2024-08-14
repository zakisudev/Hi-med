import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategoryCard from '@/components/CategoryCard';
import Spinner from '@/components/ui/Spinner'; // Assuming you have a Spinner component
import { CategoriesState } from '@/types/categoryType';
import { fetchCategories } from '../services/api';

export default async function Category() {
  const categories = await fetchCategories()

  return (
    <div className="min-h-screen flex-col flex justify-center items-center">
      <Head>
        <title>Categories</title>
        <meta name="description" content="Categories of medical specializations" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex-1 flex flex-col w-full justify-start items-center">
        <section className="flex w-full h-[450px]">
          <div
            className="flex h-full w-full justify-center items-center bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/Category.png)' }}
          >
            <h2 className="text-center text-7xl font-bold text-gray-200">Categories</h2>
          </div>
        </section>
        {!categories && <Spinner />}

        <div className="grid grid-cols-3 gap-5 w-full max-w-[1440px] place-items-center my-20">
          {categories && Array.isArray(categories) && categories.length > 0 ? (
            categories?.map((category) => (
              <CategoryCard
                key={category.id}
                imgSrc={"/categ-01.png"}
                title={category.name}
                description={category.description}
                link={`${category.name?.toLowerCase()}`}
              />
            ))
          ) : (
            <div className='flex justify-center items-center w-full h-96'>
              <h2 className='text-4xl text-center'>
                {categories.message || 'No categories found'}
              </h2>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}