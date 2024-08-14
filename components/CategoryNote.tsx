import Image from 'next/image';
import React, { useState } from 'react'

const CategoryNote = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSummaryClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex flex-col max-w-[714px] w-full mx-auto rounded-lg border-2 bg-[#EDF9F6] border-[#00B680] px-12 py-8">
      <details
        className="flex items-center gap-5 text-center"
        onClick={handleSummaryClick}
      >
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-3 text-[20px] text-justify">
            <p>
              As a public health physician and a general clinician of at
              least two decades, I can tell you authoritatively that
              <strong> most diseases have no cure</strong>, yet they
              convey at least some degree of perpetual discomfort to
              their hosts.
            </p>
            <p>
              This naturally makes <strong> prevention </strong>of these
              illnesses the best option to embrace from cradle to grave
              in our effort at being{' '}
              <strong>hearty and healthy </strong> as much as possible.
            </p>
            <p>
              Prevention does not necessarily mean there will be no
              illness though there is provision for that possibility
              under the umbrella tag
              <strong className="uppercase">
                {' '}
                &apos;Prevention&apos;{' '}
              </strong>
              , it also involves mitigating (countering) the negative
              impact of these maladies on their host in the event of
              their encroachment.
            </p>
            <p>
              For you to successfully prevent illnesses you must be
              strategic. <br /> <br /> If you understand the general
              architecture or operations of diseases, caging them become
              easier.
            </p>
            <p>
              The <strong className="uppercase"> cause </strong>is at
              the foundation of the disease entity, but it is not alone,
              it has supporters and facilitators called
              <strong className="uppercase"> risk </strong>
              factors that encourage the disease processes or
              operations.
            </p>
            <p>
              It is instructive to note that in many cases, the cause is
              invisible, it is not known(idiopathic). <br /> <br />
              In such cases, at least certain risk factors may be
              suspected.
            </p>
            <p>
              <strong className="uppercase underline">
                risk factors and causes
              </strong>
              <br />
              <strong className="uppercase"> risk factors </strong> are
              factors that increase the likelihood of a disease
              developing whereas{' '}
              <strong className="uppercase"> Causes </strong> have
              direct effect, meaning that when it is present the disease
              is most certain to be present.
            </p>
          </div>
          <div className="flex flex-col gap-2 self-end items-end">
            <h3 className="font-bold">Dr. Olurotimi Nosa Aderemi</h3>
            <p className="text-[#606060]">
              Public Health an General Physician (Pioneer Partner)
            </p>
          </div>
        </div>
        <summary className="flex gap-2 text-xl font-bold text-center list-none mb-5">
          <div className="flex items-center gap-10 justify-between w-full">
            <div className="flex gap-2 items-center">
              <p>Note</p>
              <span className="">
                <Image
                  src={'/Emoji.svg'}
                  width={36}
                  height={25}
                  alt="emoji"
                />
              </span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 transition-all duration-300 ${
                isExpanded ? 'transform rotate-180' : ''
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </summary>
      </details>
    </div>
  )
}

export default CategoryNote