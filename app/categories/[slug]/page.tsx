import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Head from 'next/head';
import Link from 'next/link';
import Spinner from '@/components/ui/Spinner';
// import CategoryNote from '@/components/CategoryNote';
import { CategoryPageProps } from '@/types/categoryType';
import { notFound } from 'next/navigation';
import { fetchCategoryData } from '@/app/services/api';

const Page: React.FC<CategoryPageProps> = async ({ params }) => {
  const categoryData = await fetchCategoryData(params.slug as string);

  if (!categoryData) {
    notFound();
  }

  return (
    <div className="min-h-screen flex-col flex justify-center items-center">
      <Head>
        <title>{categoryData?.name}</title>
        <meta
          name="description"
          content={categoryData?.description || 'Gynecology category page'}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Header /> */}
      {!categoryData ? (
        <Spinner />
      ) : (
        <main className="flex-1 flex flex-col w-full justify-start items-center">
          <section className="flex flex-col gap-24 w-full max-w-[1440px] py-20">
            <div className="flex flex-col gap-10">
              <nav className="flex items-center gap-2 text-gray-500 text-sm">
                <a href="/categories" className="hover:text-gray-600">
                  Categories
                </a>
                <span>/</span>
                <span className="text-gray-800 font-semibold">{categoryData?.name}</span>
              </nav>
              <div
                className="flex flex-col gap-7 w-full justify-center items-center text-white relative rounded-2xl py-7 px-5 shadow-lg"
                style={{
                  backgroundImage: 'url(/Category-bg.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  height: '400px',
                }}
              >
                <h1 className="text-[36px] font-bold text-center">{categoryData?.name}</h1>
                <p className="text-[20px] max-w-[570px] text-center">
                  {categoryData?.description}
                </p>
                <Link
                  href={`/categories/${categoryData?.name}/diagnosis`}
                  className="flex gap-2 px-10 py-4 absolute right-4 bottom-4 bg-[#00B680] hover:bg-[#00A972] text-white font-bold rounded-xl items-center justify-center"
                >
                  <p className="text-lg">Self diagnose</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* <CategoryNote /> */}

            {/* Header content */}
            <div className="flex flex-col justify-center gap-10">
              <h2 className="text-2xl text-center w-full">
                General Preventive Measures Against Diseases of Women
              </h2>
              <div className="flex gap-10 justify-center items-center">
                <div className="flex items-center justify-center gap-5">
                  <span className="w-7 h-7 rounded-full bg-[#D82626]"></span>
                  <p>Disease facilitators</p>
                </div>
                <div className="flex items-center justify-center gap-5">
                  <span className="w-7 h-7 rounded-full bg-[#2638D8]"></span>
                  <p>Disease mitigators</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-10">
              {/* Stages */}
              {Array.isArray(categoryData?.content) && categoryData?.content?.map((cat: any, idx: number) => (
                <div key={idx} className='flex flex-col gap-10'>
                  <h3
                    className="text-2xl font-bold text-center px-5 py-2 rounded-full bg-[#00B680] w-fit text-white"
                  >
                    Stage {idx + 1}: {cat.title}
                  </h3>
                  {(Array.isArray(cat.causes) || Array.isArray(cat.counterFactors)) && <div className="flex gap-5 items-start w-full">
                    {Array.isArray(cat.causes) && <div className="flex flex-col px-10 py-6 bg-[#F9F9F9] border-2 border-[#D0D0D0] w-1/2 rounded-lg h-full">
                      <div className="flex gap-5 items-center">
                        <span className="w-7 h-7 rounded-full bg-[#D82626]"></span>
                        <p className="font-bold text-[24px]">Causes</p>
                      </div>
                      <ul className="flex flex-col gap-2 pl-6 text-[20px] list-disc mt-4">
                        {Array.isArray(cat.causes) && cat.causes?.map((cs: any, idx: number) => (
                          <li key={idx} className="pl-2">{cs}</li>
                        ))}
                      </ul>
                    </div>}

                    {Array.isArray(cat.counterFactors) && <div className="flex flex-col px-10 py-6 bg-[#F9F9F9] border-2 border-[#D0D0D0] w-1/2 rounded-lg h-full">
                      <div className="flex gap-5 items-center">
                        <span className="w-7 h-7 rounded-full bg-[#2638D8]"></span>
                        <p className="font-bold text-[24px]">Counter factors</p>
                      </div>
                      <ul className="flex flex-col gap-2 pl-6 text-[20px] list-disc mt-4">
                        {Array.isArray(cat.counterFactors) && cat.counterFactors?.map((cf: any, idx: number) => (
                          <li key={idx} className="pl-2">{cf}</li>
                        ))}
                      </ul>
                    </div>}
                  </div>}

                  {Array.isArray(cat.riskFactors) && <div className="flex flex-col gap-2 mt-5">
                    <div className="flex gap-5 items-center">
                      <span className="w-7 h-7 rounded-full bg-[#D82626]"></span>
                      <p className="font-bold text-[24px]">Risk factors</p>
                    </div>
                    <ul className="flex flex-col gap-2 pl-6 text-[20px] list-disc mt-4">
                      {Array.isArray(cat.riskFactors) && cat.riskFactors?.map((rf: any, idx: number) => (
                        <li key={idx} className="pl-2">{rf}</li>
                      ))}
                    </ul>
                  </div>}

                  {Array.isArray(cat.lifestyleMeasures) && (<div className="flex flex-col gap-2 mt-5">
                    <div className="flex gap-5 items-center">
                      <span className="w-7 h-7 rounded-full bg-[#2638D8]"></span>
                      <p className="font-bold text-[24px]">
                        Lifestyle measures
                      </p>
                    </div>
                    <ul className="flex flex-col gap-2 pl-6 text-[20px] list-disc mt-4">
                      {Array.isArray(cat.lifestyleMeasures) && cat.lifestyleMeasures?.map((lm: any, idx: number) => (
                        <li key={idx} className="pl-2">
                          {lm}
                        </li>
                      ))}
                    </ul>
                  </div>)}
                </div>
              ))}
            </div>

          </section>

          <Link
            href="/categories/gynecology/diagnosis"
            className="flex gap-2 px-10 py-4 mb-20 bg-[#00B680] hover:bg-[#00A972] text-white font-bold rounded-xl items-center justify-center"
          >
            <p className="text-lg">Self diagnose</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </main>
      )}

      {/* <Footer /> */}
    </div>
  );
};

export default Page;
