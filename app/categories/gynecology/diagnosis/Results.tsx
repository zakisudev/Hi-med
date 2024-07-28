import Link from 'next/link';
import React from 'react';

const Results = () => {
  return (
    <div className="flex flex-col gap-10 max-w-[537px] w-full mx-auto bg-white">
      <div className="flex flex-col gap-10">
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
          <p>OR VISIT A HOSPITAL</p>
        </div>
      </div>
    </div>
  );
};

export default Results;
