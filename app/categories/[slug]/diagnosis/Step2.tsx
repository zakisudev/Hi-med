import React from 'react';
import BreastSymptoms from './BreastSymptoms';
import LowerAbdomen from './LowerAbdomen';
import ExternalGenital from './ExternalGenital';
import General from './General';
import { diagnosisData } from './diagnosisTypes';

type Step2Props = {
  patData: diagnosisData;
  setPatData: React.Dispatch<React.SetStateAction<diagnosisData>>;
  handleNext: (e: React.FormEvent<HTMLFormElement>) => void;
  handlePrev: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Step2: React.FC<Step2Props> = ({
  patData,
  setPatData,
  handleNext,
  handlePrev,
}) => {
  const resetForm = () => {
    setPatData({
      age: patData.age,
      pregnancy: patData.pregnancy,
      breasts: '',
      abdomen: '',
      genitals: '',
      general: '',
    });
  };

  const handleNextPage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleNext(e);
  };

  return (
    <form
      onSubmit={handleNextPage}
      className="flex flex-col gap-10 max-w-[834px] w-full mx-auto"
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl">Which of these are your symptoms?</h2>
        <p className="italic">You can only select one symptom per section</p>
      </div>

      {/* Section 1 */}
      <section className="flex flex-col gap-5">
        {/* Breast Symptoms */}
        <h2 className="text-[28px] text-[#226699]">Breasts</h2>
        <BreastSymptoms patData={patData} setPatData={setPatData} />

        {/* Lower Abdomen */}
        <h2 className="text-[28px] text-[#226699] mt-5">
          Lower abdomen (below the navel or belly button)
        </h2>
        <LowerAbdomen patData={patData} setPatData={setPatData} />

        {/* External genital */}
        <h2 className="text-[28px] text-[#226699] mt-5">External Genital</h2>
        <ExternalGenital patData={patData} setPatData={setPatData} />

        {/* General */}
        <h2 className="text-[28px] text-[#226699] mt-5">General</h2>
        <General patData={patData} setPatData={setPatData} />

        <div className="flex items-center justify-between gap-10 mt-5">
          <button
            onClick={resetForm}
            type="button"
            disabled={
              !patData.breasts &&
              !patData.abdomen &&
              !patData.genitals &&
              !patData.general
            }
            className={`flex gap-2 items-center px-10 py-3 font-bold rounded-xl ${
              !patData.breasts &&
              !patData.abdomen &&
              !patData.genitals &&
              !patData.general
                ? 'cursor-not-allowed border-2 text-[#D0D0D0] border-[#D0D0D0]'
                : ' border-2 border-[#00B680] hover:text-[#23785e] transition-colors duration-200 text-[#00B680]'
            }`}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.6667 5.66667C14.4975 3.2 11.9475 1.5 9 1.5C8.01509 1.5 7.03982 1.69399 6.12987 2.0709C5.21993 2.44781 4.39314 3.00026 3.6967 3.6967C3.00026 4.39314 2.44781 5.21993 2.0709 6.12987C1.69399 7.03982 1.5 8.01509 1.5 9C1.5 9.98491 1.69399 10.9602 2.0709 11.8701C2.44781 12.7801 3.00026 13.6069 3.6967 14.3033C4.39314 14.9997 5.21993 15.5522 6.12987 15.9291C7.03982 16.306 8.01509 16.5 9 16.5C10.9891 16.5 12.8968 15.7098 14.3033 14.3033C15.7098 12.8968 16.5 10.9891 16.5 9M16.5 1.5V6.5H11.5"
                stroke={
                  !patData.breasts &&
                  !patData.abdomen &&
                  !patData.genitals &&
                  !patData.general
                    ? '#D0D0D0'
                    : '#00B680'
                }
                strokeWidth="2"
              />
            </svg>
            <span className="text-[18px]">Reset</span>
          </button>

          <button
            onClick={(e) => handlePrev(e)}
            className="flex gap-2 items-center px-10 py-3 rounded-xl bg-[#00B680] text-white font-semibold hover:bg-[#23785e] transition-colors duration-200"
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
      </section>
    </form>
  );
};

export default Step2;
