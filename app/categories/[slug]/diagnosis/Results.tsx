import Link from 'next/link';
import React from 'react';
import { diagnosisData } from './diagnosisTypes';
import { useRouter } from 'next/navigation';

type ResultProps = {
  patData: diagnosisData;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

const Results: React.FC<ResultProps> = ({ patData, setStep }) => {
  const router = useRouter();

  const handleDiagnosis = () => {
    setStep(0);
    router.push('/categories/gynecology/diagnosis');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {};

  return (
    <div className="flex flex-col gap-10 bg-white justify-center items-center">
      {patData.breasts &&
      patData.abdomen &&
      patData.genitals &&
      patData.general ? (
        <div className="flex flex-col max-w-[537px] w-full gap-10">
          <h2 className="text-[32px] text-center">
            The following are the possibilities:
          </h2>
          <div className="flex flex-col justify-center items-center gap-4 text-[24px]">
            <p>Bacterial infection</p>
            <p>Viral Infection</p>
            <p>Fungal Infection</p>
          </div>
          <div className="flex flex-col items-center max-w-[628px] py-9  w-full gap-5 mx-auto rounded-lg border-2 border-[#00B680] bg-[#EDF9F6]">
            <h3 className="text-[24px] text-center">
              To get in touch with a Doctor, click the button below
            </h3>
            <Link
              href="/book"
              className="px-10 py-3 bg-[#29a8e2] hover:bg-[#2d93c3] text-white rounded-xl text-lg font-bold transition-all duration-200"
            >
              Get An Appointment
            </Link>
            <p>
              OR <strong className="text-lg">VISIT A HOSPITAL</strong>
            </p>
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 max-w-[831px] w-full mx-auto rounded-lg border-2 p-10"
        >
          <h2 className="text-[32px] text-center">
            Sorry we could&apos;nt find any results for your symptoms
          </h2>
          <p className="text-[18px]">
            Your opinion matters to us, so please share your complaints and
            suggestions with us. This will help us cater to your needs more
            effectively.
          </p>
          <textarea
            className="w-full max-h-[150px] p-5 rounded-lg border-2 focus:border-[#00B680] focus:outline-none"
            placeholder="Enter your complaints or suggestions here"
          ></textarea>
          <div className="flex items-center justify-between gap-10 mt-5">
            <button
              type="button"
              onClick={handleDiagnosis}
              className="flex gap-2 items-center px-10 py-3 rounded-xl border-2 border-[#00B680] text-[#00B680] font-semibold hover:border-[#23785e] transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transform rotate-180"
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

              <span className="font-bold text-[18px]">
                Back to Self Diagnose
              </span>
            </button>

            <button
              type="submit"
              className="flex gap-2 items-center px-10 py-3 rounded-xl bg-[#009eb6] text-white font-semibold hover:bg-[#1f6b77] transition-colors duration-200"
            >
              <span className="font-bold text-[18px]">Submit</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Results;
