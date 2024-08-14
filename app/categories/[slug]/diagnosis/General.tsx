import React from 'react';
import { diagnosisData } from './diagnosisTypes';

type GeneralSymptomsProps = {
  patData: diagnosisData;
  setPatData: React.Dispatch<React.SetStateAction<diagnosisData>>;
};

const General: React.FC<GeneralSymptomsProps> = ({ patData, setPatData }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-4 items-center">
        <input
          type="radio"
          name="general"
          id="recent-general-body-pain"
          value="recent-general-body-pain"
          checked={patData.general === 'recent-general-body-pain'}
          onChange={(e) => {
            setPatData((prevData) => ({
              ...prevData,
              general: e.target.value,
            }));
          }}
          className="w-5 h-5 appearance-none border border-[#606060] rounded-full  checked:border-[#226699] checked:border-4 checked:w-5 checked:h-5"
        />
        <label
          className="text-[22px] flex-1"
          htmlFor="recent-general-body-pain"
        >
          Recent onset(few hours to days) of general body pains
        </label>
      </div>

      <div className="flex gap-4 items-center">
        <input
          type="radio"
          name="general"
          id="long-term-general-body-pain"
          value="long-term-general-body-pain"
          checked={patData.general === 'long-term-general-body-pain'}
          onChange={(e) => {
            setPatData((prevData) => ({
              ...prevData,
              general: e.target.value,
            }));
          }}
          className="w-5 h-5 appearance-none border border-[#606060] rounded-full  checked:border-[#226699] checked:border-4 checked:w-5 checked:h-5"
        />
        <label
          className="text-[22px] flex-1"
          htmlFor="long-term-general-body-pain"
        >
          Longterm onset(more than two weeks) of general body pains
        </label>
      </div>

      <div className="flex gap-4 items-center">
        <input
          type="radio"
          name="general"
          id="fainting-feeling"
          value="fainting-feeling"
          checked={patData.general === 'fainting-feeling'}
          onChange={(e) => {
            setPatData((prevData) => ({
              ...prevData,
              general: e.target.value,
            }));
          }}
          className="w-5 h-5 appearance-none border border-[#606060] rounded-full  checked:border-[#226699] checked:border-4 checked:w-5 checked:h-5"
        />
        <label className="text-[22px] flex-1" htmlFor="fainting-feeling">
          Feeling like fainting on and off
        </label>
      </div>

      <div className="flex gap-4 items-center">
        <input
          type="radio"
          name="general"
          id="recent-low-grade-fever"
          value="recent-low-grade-fever"
          checked={patData.general === 'recent-low-grade-fever'}
          onChange={(e) => {
            setPatData((prevData) => ({
              ...prevData,
              general: e.target.value,
            }));
          }}
          className="w-5 h-5 p-0 appearance-none border border-[#606060] rounded-full  checked:border-[#226699] checked:border-4 checked:w-5 checked:h-5"
        />
        <label className="text-[22px] flex-1" htmlFor="recent-low-grade-fever">
          Low grade fever (less than 390C or 1020F ) in the last few hours or
          days
        </label>
      </div>

      <div className="flex gap-4 items-center">
        <input
          type="radio"
          name="general"
          id="long-term-low-grade-fever"
          value="long-term-low-grade-fever"
          checked={patData.general === 'long-term-low-grade-fever'}
          onChange={(e) => {
            setPatData((prevData) => ({
              ...prevData,
              general: e.target.value,
            }));
          }}
          className="w-5 h-5 appearance-none border border-[#606060] rounded-full  checked:border-[#226699] checked:border-4 checked:w-5 checked:h-5"
        />
        <label
          className="text-[22px] flex-1"
          htmlFor="long-term-low-grade-fever"
        >
          Low grade fever (less than 390C or 1020F ) persisting for more than
          one week
        </label>
      </div>

      <div className="flex gap-4 items-center">
        <input
          type="radio"
          name="general"
          id="moderate-to-high-fever"
          value="moderate-to-high-fever"
          checked={patData.general === 'moderate-to-high-fever'}
          onChange={(e) => {
            setPatData((prevData) => ({
              ...prevData,
              general: e.target.value,
            }));
          }}
          className="w-5 h-5 appearance-none border border-[#606060] rounded-full  checked:border-[#226699] checked:border-4 checked:w-5 checked:h-5"
        />
        <label className="text-[22px] flex-1" htmlFor="moderate-to-high-fever">
          Presence of moderate to high fever (more than 390C or 1020F )
        </label>
      </div>

      <div className="flex gap-4 items-center">
        <input
          type="radio"
          name="general"
          id="recent-general-body-weakness"
          value="recent-general-body-weakness"
          checked={patData.general === 'recent-general-body-weakness'}
          onChange={(e) => {
            setPatData((prevData) => ({
              ...prevData,
              general: e.target.value,
            }));
          }}
          className="w-5 h-5 appearance-none border border-[#606060] rounded-full  checked:border-[#226699] checked:border-4 checked:w-5 checked:h-5"
        />
        <label
          className="text-[22px] flex-1"
          htmlFor="recent-general-body-weakness"
        >
          Recent onset(few hours to days) of general body weakness
        </label>
      </div>

      <div className="flex gap-4 items-center">
        <input
          type="radio"
          name="general"
          id="long-term-general-body-weakness"
          value="long-term-general-body-weakness"
          checked={patData.general === 'long-term-general-body-weakness'}
          onChange={(e) => {
            setPatData((prevData) => ({
              ...prevData,
              general: e.target.value,
            }));
          }}
          className="w-5 h-5 appearance-none border border-[#606060] rounded-full  checked:border-[#226699] checked:border-4 checked:w-5 checked:h-5"
        />
        <label
          className="text-[22px] flex-1"
          htmlFor="long-term-general-body-weakness"
        >
          Longterm (over two weeks) of general body weakness
        </label>
      </div>

      <div className="flex gap-4 items-center">
        <input
          type="radio"
          name="general"
          id="excessive-thirst"
          value="excessive-thirst"
          checked={patData.general === 'excessive-thirst'}
          onChange={(e) => {
            setPatData((prevData) => ({
              ...prevData,
              general: e.target.value,
            }));
          }}
          className="w-5 h-5 appearance-none border border-[#606060] rounded-full  checked:border-[#226699] checked:border-4 checked:w-5 checked:h-5"
        />
        <label className="text-[22px] flex-1" htmlFor="excessive-thirst">
          Feeling of excessive thirst
        </label>
      </div>

      <div className="flex gap-4 items-center">
        <input
          type="radio"
          name="general"
          id="frequently-passing-large-quantity-urine"
          value="frequently-passing-large-quantity-urine"
          checked={
            patData.general === 'frequently-passing-large-quantity-urine'
          }
          onChange={(e) => {
            setPatData((prevData) => ({
              ...prevData,
              general: e.target.value,
            }));
          }}
          className="w-5 h-5 appearance-none border border-[#606060] rounded-full  checked:border-[#226699] checked:border-4 checked:w-5 checked:h-5"
        />
        <label
          className="text-[22px] flex-1"
          htmlFor="frequently-passing-large-quantity-urine"
        >
          Passing large or normal quantity of urine often (more than seven
          times) during the day
        </label>
      </div>

      <div className="flex gap-4 items-center">
        <input
          type="radio"
          name="general"
          id="frequently-night-urination"
          value="frequently-night-urination"
          checked={patData.general === 'frequently-night-urination'}
          onChange={(e) => {
            setPatData((prevData) => ({
              ...prevData,
              general: e.target.value,
            }));
          }}
          className="w-5 h-5 appearance-none border border-[#606060] rounded-full  checked:border-[#226699] checked:border-4 checked:w-5 checked:h-5"
        />
        <label
          className="text-[22px] flex-1"
          htmlFor="frequently-night-urination"
        >
          Having to wake up more than twice every night to urinate
        </label>
      </div>

      <div className="flex gap-4 items-center">
        <input
          type="radio"
          name="general"
          id="recent-poor-appetite"
          value="recent-poor-appetite"
          checked={patData.general === 'recent-poor-appetite'}
          onChange={(e) => {
            setPatData((prevData) => ({
              ...prevData,
              general: e.target.value,
            }));
          }}
          className="w-5 h-5 appearance-none border border-[#606060] rounded-full  checked:border-[#226699] checked:border-4 checked:w-5 checked:h-5"
        />
        <label className="text-[22px] flex-1" htmlFor="recent-poor-appetite">
          Recent onset(less than two weeks) of poor appetite
        </label>
      </div>

      <div className="flex gap-4 items-center">
        <input
          type="radio"
          name="general"
          id="long-term-poor-appetite"
          value="long-term-poor-appetite"
          checked={patData.general === 'long-term-poor-appetite'}
          onChange={(e) => {
            setPatData((prevData) => ({
              ...prevData,
              general: e.target.value,
            }));
          }}
          className="w-5 h-5 appearance-none border border-[#606060] rounded-full  checked:border-[#226699] checked:border-4 checked:w-5 checked:h-5"
        />
        <label className="text-[22px] flex-1" htmlFor="long-term-poor-appetite">
          Longterm(more than two weeks) of poor appetite
        </label>
      </div>

      <div className="flex gap-4 items-center">
        <input
          type="radio"
          name="general"
          id="ankles-legs-swelling"
          value="ankles-legs-swelling"
          checked={patData.general === 'ankles-legs-swelling'}
          onChange={(e) => {
            setPatData((prevData) => ({
              ...prevData,
              general: e.target.value,
            }));
          }}
          className="w-5 h-5 appearance-none border border-[#606060] rounded-full  checked:border-[#226699] checked:border-4 checked:w-5 checked:h-5"
        />
        <label className="text-[22px] flex-1" htmlFor="ankles-legs-swelling">
          Swelling of the ankles/legs
        </label>
      </div>
    </div>
  );
};

export default General;
