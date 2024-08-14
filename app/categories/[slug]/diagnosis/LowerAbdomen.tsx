import React from 'react';
import { diagnosisData } from './diagnosisTypes';

type AbdomenSymptomsProps = {
  patData: diagnosisData;
  setPatData: React.Dispatch<React.SetStateAction<diagnosisData>>;
};

const LowerAbdomen: React.FC<AbdomenSymptomsProps> = ({
  patData,
  setPatData,
}) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-4 items-center">
        <input
          type="radio"
          name="abdomen"
          id="lower-abdomen-gripping-no-exp-no-menses"
          value="lower-abdomen-gripping-no-exp-no-menses"
          checked={
            patData.abdomen === 'lower-abdomen-gripping-no-exp-no-menses'
          }
          onChange={(e) => {
            setPatData((prevData) => ({
              ...prevData,
              abdomen: e.target.value,
            }));
          }}
          className="w-5 h-5 appearance-none border border-[#606060] rounded-full  checked:border-[#226699] checked:border-4 checked:w-5 checked:h-5"
        />
        <label
          className="text-[22px] flex-1"
          htmlFor="lower-abdomen-gripping-no-exp-no-menses"
        >
          Recent sudden gripping lower abdominal pain with no past
          experience(outside menstrual period)
        </label>
      </div>

      <div className="flex gap-4 items-center">
        <input
          type="radio"
          name="abdomen"
          id="long-term-recurring-no-menses"
          value="long-term-recurring-no-menses"
          checked={patData.abdomen === 'long-term-recurring-no-menses'}
          onChange={(e) => {
            setPatData((prevData) => ({
              ...prevData,
              abdomen: e.target.value,
            }));
          }}
          className="w-5 h-5 appearance-none border border-[#606060] rounded-full  checked:border-[#226699] checked:border-4 checked:w-5 checked:h-5"
        />
        <label
          className="text-[22px] flex-1"
          htmlFor="long-term-recurring-no-menses"
        >
          Longterm recurrent lower abdominal pain outside menses
        </label>
      </div>

      <div className="flex gap-4 items-center">
        <input
          type="radio"
          name="abdomen"
          id="pain-on-menses-disrupt-work"
          value="pain-on-menses-disrupt-work"
          checked={patData.abdomen === 'pain-on-menses-disrupt-work'}
          onChange={(e) => {
            setPatData((prevData) => ({
              ...prevData,
              abdomen: e.target.value,
            }));
          }}
          className="w-5 h-5 appearance-none border border-[#606060] rounded-full  checked:border-[#226699] checked:border-4 checked:w-5 checked:h-5"
        />
        <label
          className="text-[22px] flex-1"
          htmlFor="pain-on-menses-disrupt-work"
        >
          You experience pain during menses severe enough to disrupt your daily
          activities
        </label>
      </div>

      <div className="flex gap-4 items-center">
        <input
          type="radio"
          name="abdomen"
          id="heavy-menses-more-days"
          value="heavy-menses-more-days"
          checked={patData.abdomen === 'heavy-menses-more-days'}
          onChange={(e) => {
            setPatData((prevData) => ({
              ...prevData,
              abdomen: e.target.value,
            }));
          }}
          className="w-5 h-5 p-0 appearance-none border border-[#606060] rounded-full  checked:border-[#226699] checked:border-4 checked:w-5 checked:h-5"
        />
        <label className="text-[22px] flex-1" htmlFor="heavy-menses-more-days">
          You experience heavy menstrual flow as defined by menses lasting more
          than seven(7) days or having to change your pads many times a day or
          passing clots during menses
        </label>
      </div>

      <div className="flex gap-4 items-center">
        <input
          type="radio"
          name="abdomen"
          id="irregular-menses"
          value="irregular-menses"
          checked={patData.abdomen === 'irregular-menses'}
          onChange={(e) => {
            setPatData((prevData) => ({
              ...prevData,
              abdomen: e.target.value,
            }));
          }}
          className="w-5 h-5 appearance-none border border-[#606060] rounded-full  checked:border-[#226699] checked:border-4 checked:w-5 checked:h-5"
        />
        <label className="text-[22px] flex-1" htmlFor="irregular-menses">
          The interval between your menstrual cycles changes widely from time to
          time by more than a week(irregular menses)
        </label>
      </div>

      <div className="flex gap-4 items-center">
        <input
          type="radio"
          name="abdomen"
          id="unsuccessful-pregnancy-trial-year"
          value="unsuccessful-pregnancy-trial-year"
          checked={patData.abdomen === 'unsuccessful-pregnancy-trial-year'}
          onChange={(e) => {
            setPatData((prevData) => ({
              ...prevData,
              abdomen: e.target.value,
            }));
          }}
          className="w-5 h-5 appearance-none border border-[#606060] rounded-full  checked:border-[#226699] checked:border-4 checked:w-5 checked:h-5"
        />
        <label
          className="text-[22px] flex-1"
          htmlFor="unsuccessful-pregnancy-trial-year"
        >
          You have made unsuccessful effort at getting pregnant for over a year
          cohabiting with your spouse
        </label>
      </div>

      <div className="flex gap-4 items-center">
        <input
          type="radio"
          name="abdomen"
          id="losing-pregnancy-repeatedly"
          value="losing-pregnancy-repeatedly"
          checked={patData.abdomen === 'losing-pregnancy-repeatedly'}
          onChange={(e) => {
            setPatData((prevData) => ({
              ...prevData,
              abdomen: e.target.value,
            }));
          }}
          className="w-5 h-5 appearance-none border border-[#606060] rounded-full  checked:border-[#226699] checked:border-4 checked:w-5 checked:h-5"
        />
        <label
          className="text-[22px] flex-1"
          htmlFor="losing-pregnancy-repeatedly"
        >
          You have been losing pregnancy repeatedly before maturity
        </label>
      </div>
    </div>
  );
};

export default LowerAbdomen;
