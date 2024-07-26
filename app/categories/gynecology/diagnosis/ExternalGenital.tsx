import React from 'react';
import { diagnosisData } from './diagnosisTypes';

type ExternalSymptomsProps = {
  patData: diagnosisData;
  setPatData: React.Dispatch<React.SetStateAction<diagnosisData>>;
};

const ExternalGenital: React.FC<ExternalSymptomsProps> = ({
  patData,
  setPatData,
}) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-4 items-center">
        <input
          type="radio"
          name="genital"
          id="recent-small-urine-quantity"
          value="recent-small-urine-quantity"
          checked={patData.genitals === 'recent-small-urine-quantity'}
          onChange={(e) => {
            setPatData((prevData) => ({
              ...prevData,
              genitals: e.target.value,
            }));
          }}
          className="w-5 h-5 appearance-none border border-[#606060] rounded-full  checked:border-[#226699] checked:border-4 checked:w-5 checked:h-5"
        />
        <label
          className="text-[22px] flex-1"
          htmlFor="recent-small-urine-quantity"
        >
          Recent onset(few hours or days) of passing small quantity of urine
          often
        </label>
      </div>

      <div className="flex gap-4 items-center">
        <input
          type="radio"
          name="genital"
          id="long-term-small-urine-quantity"
          value="long-term-small-urine-quantity"
          checked={patData.genitals === 'long-term-small-urine-quantity'}
          onChange={(e) => {
            setPatData((prevData) => ({
              ...prevData,
              genitals: e.target.value,
            }));
          }}
          className="w-5 h-5 appearance-none border border-[#606060] rounded-full  checked:border-[#226699] checked:border-4 checked:w-5 checked:h-5"
        />
        <label
          className="text-[22px] flex-1"
          htmlFor="long-term-small-urine-quantity"
        >
          Longterm onset(more than two weeks) of passing small quantity of urine
          often
        </label>
      </div>

      <div className="flex gap-4 items-center">
        <input
          type="radio"
          name="genital"
          id="urinal-pain"
          value="urinal-pain"
          checked={patData.genitals === 'urinal-pain'}
          onChange={(e) => {
            setPatData((prevData) => ({
              ...prevData,
              genitals: e.target.value,
            }));
          }}
          className="w-5 h-5 appearance-none border border-[#606060] rounded-full  checked:border-[#226699] checked:border-4 checked:w-5 checked:h-5"
        />
        <label className="text-[22px] flex-1" htmlFor="urinal-pain">
          You have pain while urinating
        </label>
      </div>

      <div className="flex gap-4 items-center">
        <input
          type="radio"
          name="genital"
          id="unable-to-hold-urine-once-pressed"
          value="unable-to-hold-urine-once-pressed"
          checked={patData.genitals === 'unable-to-hold-urine-once-pressed'}
          onChange={(e) => {
            setPatData((prevData) => ({
              ...prevData,
              genitals: e.target.value,
            }));
          }}
          className="w-5 h-5 p-0 appearance-none border border-[#606060] rounded-full  checked:border-[#226699] checked:border-4 checked:w-5 checked:h-5"
        />
        <label
          className="text-[22px] flex-1"
          htmlFor="unable-to-hold-urine-once-pressed"
        >
          You are unable to hold urine once you feel pressed to urinate
        </label>
      </div>

      <div className="flex gap-4 items-center">
        <input
          type="radio"
          name="genital"
          id="recent-vaginal-itching"
          value="recent-vaginal-itching"
          checked={patData.genitals === 'recent-vaginal-itching'}
          onChange={(e) => {
            setPatData((prevData) => ({
              ...prevData,
              genitals: e.target.value,
            }));
          }}
          className="w-5 h-5 appearance-none border border-[#606060] rounded-full  checked:border-[#226699] checked:border-4 checked:w-5 checked:h-5"
        />
        <label className="text-[22px] flex-1" htmlFor="recent-vaginal-itching">
          Recent onset(few hours or days) of vaginal itching
        </label>
      </div>

      <div className="flex gap-4 items-center">
        <input
          type="radio"
          name="genital"
          id="long-term-vaginal-itching"
          value="long-term-vaginal-itching"
          checked={patData.genitals === 'long-term-vaginal-itching'}
          onChange={(e) => {
            setPatData((prevData) => ({
              ...prevData,
              genitals: e.target.value,
            }));
          }}
          className="w-5 h-5 appearance-none border border-[#606060] rounded-full  checked:border-[#226699] checked:border-4 checked:w-5 checked:h-5"
        />
        <label
          className="text-[22px] flex-1"
          htmlFor="long-term-vaginal-itching"
        >
          Longterm onset(more than two weeks) of vaginal itching
        </label>
      </div>

      <div className="flex gap-4 items-center">
        <input
          type="radio"
          name="genital"
          id="recent-color-odor-quantity-vaginal-discharge"
          value="recent-color-odor-quantity-vaginal-discharge"
          checked={
            patData.genitals === 'recent-color-odor-quantity-vaginal-discharge'
          }
          onChange={(e) => {
            setPatData((prevData) => ({
              ...prevData,
              genitals: e.target.value,
            }));
          }}
          className="w-5 h-5 appearance-none border border-[#606060] rounded-full  checked:border-[#226699] checked:border-4 checked:w-5 checked:h-5"
        />
        <label
          className="text-[22px] flex-1"
          htmlFor="recent-color-odor-quantity-vaginal-discharge"
        >
          Recent onset(few hours or days) of change in the color , odour or
          quantity of your vaginal discharge or secretions
        </label>
      </div>

      <div className="flex gap-4 items-center">
        <input
          type="radio"
          name="genital"
          id="long-term-color-odor-quantity-vaginal-discharge"
          value="long-term-color-odor-quantity-vaginal-discharge"
          checked={
            patData.genitals ===
            'long-term-color-odor-quantity-vaginal-discharge'
          }
          onChange={(e) => {
            setPatData((prevData) => ({
              ...prevData,
              genitals: e.target.value,
            }));
          }}
          className="w-5 h-5 appearance-none border border-[#606060] rounded-full  checked:border-[#226699] checked:border-4 checked:w-5 checked:h-5"
        />
        <label
          className="text-[22px] flex-1"
          htmlFor="long-term-color-odor-quantity-vaginal-discharge"
        >
          Longterm onset(more than two weeks) of change in the color , odour or
          quantity of your vaginal discharge or secretions
        </label>
      </div>

      <div className="flex gap-4 items-center">
        <input
          type="radio"
          name="genital"
          id="pain-during-coitus"
          value="pain-during-coitus"
          checked={patData.genitals === 'pain-during-coitus'}
          onChange={(e) => {
            setPatData((prevData) => ({
              ...prevData,
              genitals: e.target.value,
            }));
          }}
          className="w-5 h-5 appearance-none border border-[#606060] rounded-full  checked:border-[#226699] checked:border-4 checked:w-5 checked:h-5"
        />
        <label className="text-[22px] flex-1" htmlFor="pain-during-coitus">
          You have pain during coitus (sexual intercourse)
        </label>
      </div>

      <div className="flex gap-4 items-center">
        <input
          type="radio"
          name="genital"
          id="skin-change-rash-around-vagina"
          value="skin-change-rash-around-vagina"
          checked={patData.genitals === 'skin-change-rash-around-vagina'}
          onChange={(e) => {
            setPatData((prevData) => ({
              ...prevData,
              genitals: e.target.value,
            }));
          }}
          className="w-5 h-5 appearance-none border border-[#606060] rounded-full  checked:border-[#226699] checked:border-4 checked:w-5 checked:h-5"
        />
        <label
          className="text-[22px] flex-1"
          htmlFor="skin-change-rash-around-vagina"
        >
          You have skin change or rash around your vagina
        </label>
      </div>

      <div className="flex gap-4 items-center">
        <input
          type="radio"
          name="genital"
          id="vaginal-swelling-no-pain-one-side"
          value="vaginal-swelling-no-pain-one-side"
          checked={patData.genitals === 'vaginal-swelling-no-pain-one-side'}
          onChange={(e) => {
            setPatData((prevData) => ({
              ...prevData,
              genitals: e.target.value,
            }));
          }}
          className="w-5 h-5 appearance-none border border-[#606060] rounded-full  checked:border-[#226699] checked:border-4 checked:w-5 checked:h-5"
        />
        <label
          className="text-[22px] flex-1"
          htmlFor="vaginal-swelling-no-pain-one-side"
        >
          You have painless vaginal swelling on one side
        </label>
      </div>

      <div className="flex gap-4 items-center">
        <input
          type="radio"
          name="genital"
          id="vaginal-swelling-no-pain-both-side"
          value="vaginal-swelling-no-pain-both-side"
          checked={patData.genitals === 'vaginal-swelling-no-pain-both-side'}
          onChange={(e) => {
            setPatData((prevData) => ({
              ...prevData,
              genitals: e.target.value,
            }));
          }}
          className="w-5 h-5 appearance-none border border-[#606060] rounded-full  checked:border-[#226699] checked:border-4 checked:w-5 checked:h-5"
        />
        <label
          className="text-[22px] flex-1"
          htmlFor="vaginal-swelling-no-pain-both-side"
        >
          You have painless vaginal swelling on both side
        </label>
      </div>

      <div className="flex gap-4 items-center">
        <input
          type="radio"
          name="genital"
          id="recent-vaginal-swelling-one-side"
          value="recent-vaginal-swelling-one-side"
          checked={patData.genitals === 'recent-vaginal-swelling-one-side'}
          onChange={(e) => {
            setPatData((prevData) => ({
              ...prevData,
              genitals: e.target.value,
            }));
          }}
          className="w-5 h-5 appearance-none border border-[#606060] rounded-full  checked:border-[#226699] checked:border-4 checked:w-5 checked:h-5"
        />
        <label
          className="text-[22px] flex-1"
          htmlFor="recent-vaginal-swelling-one-side"
        >
          You have Painful vaginal swelling on one side less than two weeks ago
        </label>
      </div>

      <div className="flex gap-4 items-center">
        <input
          type="radio"
          name="genital"
          id="long-term-vaginal-swelling-one-side"
          value="long-term-vaginal-swelling-one-side"
          checked={patData.genitals === 'long-term-vaginal-swelling-one-side'}
          onChange={(e) => {
            setPatData((prevData) => ({
              ...prevData,
              genitals: e.target.value,
            }));
          }}
          className="w-5 h-5 appearance-none border border-[#606060] rounded-full  checked:border-[#226699] checked:border-4 checked:w-5 checked:h-5"
        />
        <label
          className="text-[22px] flex-1"
          htmlFor="long-term-vaginal-swelling-one-side"
        >
          You have Painful vaginal swelling on one side more than two weeks ago
        </label>
      </div>

      <div className="flex gap-4 items-center">
        <input
          type="radio"
          name="genital"
          id="recent-vaginal-swelling-no-pain-both-side"
          value="recent-vaginal-swelling-no-pain-both-side"
          checked={
            patData.genitals === 'recent-vaginal-swelling-no-pain-both-side'
          }
          onChange={(e) => {
            setPatData((prevData) => ({
              ...prevData,
              genitals: e.target.value,
            }));
          }}
          className="w-5 h-5 appearance-none border border-[#606060] rounded-full  checked:border-[#226699] checked:border-4 checked:w-5 checked:h-5"
        />
        <label
          className="text-[22px] flex-1"
          htmlFor="recent-vaginal-swelling-no-pain-both-side"
        >
          You have Painful vaginal swelling on both side less than two weeks ago
        </label>
      </div>

      <div className="flex gap-4 items-center">
        <input
          type="radio"
          name="genital"
          id="long-term-vaginal-swelling-no-pain-both-side"
          value="long-term-vaginal-swelling-no-pain-both-side"
          checked={
            patData.genitals === 'long-term-vaginal-swelling-no-pain-both-side'
          }
          onChange={(e) => {
            setPatData((prevData) => ({
              ...prevData,
              genitals: e.target.value,
            }));
          }}
          className="w-5 h-5 appearance-none border border-[#606060] rounded-full  checked:border-[#226699] checked:border-4 checked:w-5 checked:h-5"
        />
        <label
          className="text-[22px] flex-1"
          htmlFor="long-term-vaginal-swelling-no-pain-both-side"
        >
          You have Painful vaginal swelling on both side more than two weeks ago
        </label>
      </div>

      <div className="flex gap-4 items-center">
        <input
          type="radio"
          name="genital"
          id="vaginal-swelling-both-sides"
          value="vaginal-swelling-both-sides"
          checked={patData.genitals === 'vaginal-swelling-both-sides'}
          onChange={(e) => {
            setPatData((prevData) => ({
              ...prevData,
              genitals: e.target.value,
            }));
          }}
          className="w-5 h-5 appearance-none border border-[#606060] rounded-full  checked:border-[#226699] checked:border-4 checked:w-5 checked:h-5"
        />
        <label
          className="text-[22px] flex-1"
          htmlFor="vaginal-swelling-both-sides"
        >
          You have Painful vaginal swelling on both sides
        </label>
      </div>

      <div className="flex gap-4 items-center">
        <input
          type="radio"
          name="genital"
          id="abnormal-vaginal-bleeding"
          value="abnormal-vaginal-bleeding"
          checked={patData.genitals === 'abnormal-vaginal-bleeding'}
          onChange={(e) => {
            setPatData((prevData) => ({
              ...prevData,
              genitals: e.target.value,
            }));
          }}
          className="w-5 h-5 appearance-none border border-[#606060] rounded-full  checked:border-[#226699] checked:border-4 checked:w-5 checked:h-5"
        />
        <label
          className="text-[22px] flex-1"
          htmlFor="abnormal-vaginal-bleeding"
        >
          You experience abnormal vaginal bleeding
        </label>
      </div>
    </div>
  );
};

export default ExternalGenital;
