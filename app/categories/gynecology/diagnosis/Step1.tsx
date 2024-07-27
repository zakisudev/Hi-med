import React, { MouseEvent } from 'react';
import { useRouter } from 'next/navigation';
import { diagnosisData } from './diagnosisTypes';

type Step1Props = {
  handleNext: (e: React.FormEvent<HTMLFormElement>) => void;
  patData: diagnosisData;
  setPatData: React.Dispatch<React.SetStateAction<diagnosisData>>;
};

const Step1: React.FC<Step1Props> = ({ handleNext, patData, setPatData }) => {
  const router = useRouter();

  const handlePrev = (e: MouseEvent) => {
    e.preventDefault();
    router.back();
  };

  const handleNextPage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleNext(e);
  };

  return (
    <div className="flex flex-col gap-10 max-w-[537px] w-full mx-auto bg-white">
      <form onSubmit={handleNextPage} className="flex flex-col w-full gap-16">
        <div className="flex flex-col w-full p-8 shadow-lg rounded-lg border border-[#D0D0D0]">
          <h2 className="text-[24px] text-center">Fill Biodata form</h2>
          <div className="flex flex-col gap-8 w-full p-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="age" className="text-lg font-semibold">
                Age range
              </label>
              <select
                id="age"
                className="border border-[#D0D0D0] rounded p-3 bg-white"
                defaultValue={patData?.age || ''}
                onChange={(e) => {
                  setPatData((prevData) => ({
                    ...prevData,
                    age: e.target.value,
                  }));
                }}
                required
              >
                <option value="">Select age range</option>
                <option value="0-10">0-10</option>
                <option value="10-20">10-20</option>
                <option value="20-30">20-30</option>
                <option value="30-40">30-40</option>
                <option value="40-50">40-50</option>
                <option value="50-60">50-60</option>
                <option value="60-70">60-70</option>
                <option value="70-80">70-80</option>
                <option value="80-90">80-90</option>
                <option value="90-100">90-100</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pregnancy" className="text-lg font-semibold">
                Pregnancy status
              </label>
              <select
                id="pregnancy"
                className="border border-[#D0D0D0] rounded p-3 bg-white"
                defaultValue={
                  patData?.pregnancy === ''
                    ? ''
                    : patData?.pregnancy === true
                    ? 'yes'
                    : 'nope'
                }
                onChange={(e) => {
                  setPatData((prevData) => ({
                    ...prevData,
                    pregnancy: e.target.value === 'yes' ? true : false,
                  }));
                }}
                required
              >
                <option value="">Select status</option>
                <option value="yes">Yes</option>
                <option value="nope">No</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-10">
          <button
            onClick={(e) => handlePrev(e)}
            className="flex gap-2 items-center px-10 py-3 text-[#00B680] font-semibold hover:text-[#23785e] transition-colors duration-200 border-2 border-[#00B680] rounded-xl"
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

            <span className="font-bold text-[18px]">Previous Page</span>
          </button>

          <button
            type="submit"
            className="flex gap-2 items-center px-10 py-3 rounded-xl bg-[#00B680] text-white font-semibold hover:bg-[#23785e] transition-colors duration-200"
          >
            <span className="font-bold text-[18px]">Next Page</span>

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
    </div>
  );
};

export default Step1;
