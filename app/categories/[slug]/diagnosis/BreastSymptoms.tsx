import React from 'react';
import { diagnosisData } from './diagnosisTypes';

type BreastSymptomsProps = {
  patData: diagnosisData;
  setPatData: React.Dispatch<React.SetStateAction<diagnosisData>>;
};

const BreastSymptoms: React.FC<BreastSymptomsProps> = ({
  patData,
  setPatData,
}) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-4 items-center">
        <input
          type="radio"
          name="breasts"
          id="pain-on-one-breast"
          value="pain-on-one-breast"
          checked={patData.breasts === 'pain-on-one-breast'}
          onChange={(e) => {
            setPatData((prevData) => ({
              ...prevData,
              breasts: e.target.value,
            }));
          }}
          className="w-5 h-5 p-0 appearance-none border border-[#606060] rounded-full  checked:border-[#226699] checked:border-4 checked:w-5 checked:h-5"
        />
        <label className="text-[22px] flex-1" htmlFor="pain-on-one-breast">
          You have pain in one breast
        </label>
      </div>

      <div className="flex gap-4 items-center">
        <input
          type="radio"
          name="breasts"
          id="pain-on-both-breast-fluctuate"
          value="pain-on-both-breast-fluctuate"
          checked={patData.breasts === 'pain-on-both-breast-fluctuate'}
          onChange={(e) => {
            setPatData((prevData) => ({
              ...prevData,
              breasts: e.target.value,
            }));
          }}
          className="w-5 h-5 p-0 appearance-none border border-[#606060] rounded-full  checked:border-[#226699] checked:border-4 checked:w-5 checked:h-5"
        />
        <label
          className="text-[22px] flex-1"
          htmlFor="pain-on-both-breast-fluctuate"
        >
          You have pain in both breasts which fluctuates with menstrual cycle
        </label>
      </div>

      <div className="flex gap-4 items-center">
        <input
          type="radio"
          name="breasts"
          id="pain-on-both-breast-no-fluctuate"
          value="pain-on-both-breast-no-fluctuate"
          checked={patData.breasts === 'pain-on-both-breast-no-fluctuate'}
          onChange={(e) => {
            setPatData((prevData) => ({
              ...prevData,
              breasts: e.target.value,
            }));
          }}
          className="w-5 h-5 p-0 appearance-none border border-[#606060] rounded-full  checked:border-[#226699] checked:border-4 checked:w-5 checked:h-5"
        />
        <label
          className="text-[22px] flex-1"
          htmlFor="pain-on-both-breast-no-fluctuate"
        >
          You have pain in both breasts which does not fluctuate with menstrual
          cycle
        </label>
      </div>

      <div className="flex gap-4 items-center">
        <input
          type="radio"
          name="breasts"
          id="one-breast-swelling"
          value="one-breast-swelling"
          checked={patData.breasts === 'one-breast-swelling'}
          onChange={(e) => {
            setPatData((prevData) => ({
              ...prevData,
              breasts: e.target.value,
            }));
          }}
          className="w-5 h-5 p-0 appearance-none border border-[#606060] rounded-full  checked:border-[#226699] checked:border-4 checked:w-5 checked:h-5"
        />
        <label className="text-[22px] flex-1" htmlFor="one-breast-swelling">
          You have swelling in one breast
        </label>
      </div>

      <div className="flex gap-4 items-center">
        <input
          type="radio"
          name="breasts"
          id="both-breast-swelling-fluctuate"
          value="both-breast-swelling-fluctuate"
          checked={patData.breasts === 'both-breast-swelling-fluctuate'}
          onChange={(e) => {
            setPatData((prevData) => ({
              ...prevData,
              breasts: e.target.value,
            }));
          }}
          className="w-5 h-5 p-0 appearance-none border border-[#606060] rounded-full  checked:border-[#226699] checked:border-4 checked:w-5 checked:h-5"
        />
        <label
          className="text-[22px] flex-1"
          htmlFor="both-breast-swelling-fluctuate"
        >
          You have swelling in both breasts which fluctuates with menstrual
          cycle
        </label>
      </div>

      <div className="flex gap-4 items-center">
        <input
          type="radio"
          name="breasts"
          id="both-breast-swelling-no-fluctuate"
          value="both-breast-swelling-no-fluctuate"
          checked={patData.breasts === 'both-breast-swelling-no-fluctuate'}
          onChange={(e) => {
            setPatData((prevData) => ({
              ...prevData,
              breasts: e.target.value,
            }));
          }}
          className="w-5 h-5 p-0 appearance-none border border-[#606060] rounded-full  checked:border-[#226699] checked:border-4 checked:w-5 checked:h-5"
        />
        <label
          className="text-[22px] flex-1"
          htmlFor="both-breast-swelling-no-fluctuate"
        >
          You have swelling in both breasts which fluctuates with menstrual
          cycle
        </label>
      </div>

      <div className="flex gap-4 items-center">
        <input
          type="radio"
          name="breasts"
          id="one-breast-skin-rash"
          value="one-breast-skin-rash"
          checked={patData.breasts === 'one-breast-skin-rash'}
          onChange={(e) => {
            setPatData((prevData) => ({
              ...prevData,
              breasts: e.target.value,
            }));
          }}
          className="w-5 h-5 p-0 appearance-none border border-[#606060] rounded-full  checked:border-[#226699] checked:border-4 checked:w-5 checked:h-5"
        />
        <label className="text-[22px] flex-1" htmlFor="one-breast-skin-rash">
          You have skin change or rash only on the breast(s)
        </label>
      </div>

      <div className="flex gap-4 items-center">
        <input
          type="radio"
          name="breasts"
          id="one-breast-nipple-discharge"
          value="one-breast-nipple-discharge"
          checked={patData.breasts === 'one-breast-nipple-discharge'}
          onChange={(e) => {
            setPatData((prevData) => ({
              ...prevData,
              breasts: e.target.value,
            }));
          }}
          className="w-5 h-5 p-0 appearance-none border border-[#606060] rounded-full  checked:border-[#226699] checked:border-4 checked:w-5 checked:h-5"
        />
        <label
          className="text-[22px] flex-1"
          htmlFor="one-breast-nipple-discharge"
        >
          You have nipple discharge from one breast
        </label>
      </div>

      <div className="flex gap-4 items-center">
        <input
          type="radio"
          name="breasts"
          id="both-breast-nipple-discharge"
          value="both-breast-nipple-discharge"
          checked={patData.breasts === 'both-breast-nipple-discharge'}
          onChange={(e) => {
            setPatData((prevData) => ({
              ...prevData,
              breasts: e.target.value,
            }));
          }}
          className="w-5 h-5 p-0 appearance-none border border-[#606060] rounded-full  checked:border-[#226699] checked:border-4 checked:w-5 checked:h-5"
        />
        <label
          className="text-[22px] flex-1"
          htmlFor="both-breast-nipple-discharge"
        >
          You have nipple discharge from both breast
        </label>
      </div>

      <div className="flex gap-4 items-center">
        <input
          type="radio"
          name="breasts"
          id="one-breast-bloody-nipple-discharge"
          value="one-breast-bloody-nipple-discharge"
          checked={patData.breasts === 'one-breast-bloody-nipple-discharge'}
          onChange={(e) => {
            setPatData((prevData) => ({
              ...prevData,
              breasts: e.target.value,
            }));
          }}
          className="w-5 h-5 p-0 appearance-none border border-[#606060] rounded-full  checked:border-[#226699] checked:border-4 checked:w-5 checked:h-5"
        />
        <label
          className="text-[22px] flex-1"
          htmlFor="one-breast-bloody-nipple-discharge"
        >
          You have bloody nipple discharge from one breast
        </label>
      </div>

      <div className="flex gap-4 items-center">
        <input
          type="radio"
          name="breasts"
          id="both-breast-bloody-nipple-discharge"
          value="both-breast-bloody-nipple-discharge"
          checked={patData.breasts === 'both-breast-bloody-nipple-discharge'}
          onChange={(e) => {
            setPatData((prevData) => ({
              ...prevData,
              breasts: e.target.value,
            }));
          }}
          className="w-5 h-5 p-0 appearance-none border border-[#606060] rounded-full  checked:border-[#226699] checked:border-4 checked:w-5 checked:h-5"
        />
        <label
          className="text-[22px] flex-1"
          htmlFor="both-breast-bloody-nipple-discharge"
        >
          You have bloody nipple discharge from both breast
        </label>
      </div>

      <div className="flex gap-4 items-center">
        <input
          type="radio"
          name="breasts"
          id="one-arm-swelling-armpit"
          value="one-arm-swelling-armpit"
          checked={patData.breasts === 'one-arm-swelling-armpit'}
          onChange={(e) => {
            setPatData((prevData) => ({
              ...prevData,
              breasts: e.target.value,
            }));
          }}
          className="w-5 h-5 p-0 appearance-none border border-[#606060] rounded-full  checked:border-[#226699] checked:border-4 checked:w-5 checked:h-5"
        />
        <label className="text-[22px] flex-1" htmlFor="one-arm-swelling-armpit">
          You have Swelling under one armpit
        </label>
      </div>

      <div className="flex gap-4 items-center">
        <input
          type="radio"
          name="breasts"
          id="both-arm-swelling-armpit"
          value="both-arm-swelling-armpit"
          checked={patData.breasts === 'both-arm-swelling-armpit'}
          onChange={(e) => {
            setPatData((prevData) => ({
              ...prevData,
              breasts: e.target.value,
            }));
          }}
          className="w-5 h-5 p-0 appearance-none border border-[#606060] rounded-full  checked:border-[#226699] checked:border-4 checked:w-5 checked:h-5"
        />
        <label
          className="text-[22px] flex-1"
          htmlFor="both-arm-swelling-armpit"
        >
          You have Swelling under both armpit
        </label>
      </div>

      <div className="flex gap-4 items-center">
        <input
          type="radio"
          name="breasts"
          id="nipple-inverted"
          value="nipple-inverted"
          checked={patData.breasts === 'nipple-inverted'}
          onChange={(e) => {
            setPatData((prevData) => ({
              ...prevData,
              breasts: e.target.value,
            }));
          }}
          className="w-5 h-5 p-0 appearance-none border border-[#606060] rounded-full  checked:border-[#226699] checked:border-4 checked:w-5 checked:h-5"
        />
        <label className="text-[22px] flex-1" htmlFor="nipple-inverted">
          One or both nipples became inverted in the last few days, weeks or
          months
        </label>
      </div>
    </div>
  );
};

export default BreastSymptoms;
