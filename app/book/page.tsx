import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Book() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center w-full">
      <main className="flex flex-1 flex-col w-full justify-start items-center">
        <section className="flex w-full h-[250px] lg:h-[450px]">
          <div
            className="flex h-full w-full justify-center items-center bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/Contact.png)',
            }}
          >
            <h2 className="text-center text-responsiveHeader font-bold text-gray-200">
              Book an Appointment
            </h2>
          </div>
        </section>
        <div className="flex flex-1 h-full px-5 my-10 2xl:px-0 w-full">
          <form className="flex flex-col w-full max-w-[580px] shadow-lg mx-auto gap-7 p-10 bg-white">
            <h2 className="text-responsiveTag font-bold text-gray-800">
              Reach Out To A Doctor
            </h2>
            <div className="flex flex-col gap-2">
              <label htmlFor="fullName" className="text-xl">
                Full name
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Enter your full name"
                className="w-full h-[52px] p-2 bg-transparent border-2 rounded-lg border-gray-300 focus:outline-none focus:border-[#29a8e2]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xl">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
                className="w-full h-[52px] p-2 bg-transparent border-2 rounded-lg border-gray-300 focus:outline-none focus:border-[#29a8e2]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phoneNumber" className="text-xl">
                Phone number
              </label>
              <input
                type="phoneNumber"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="Enter your phone number"
                className="w-full h-[52px] p-2 bg-transparent border-2 rounded-lg border-gray-300 focus:outline-none focus:border-[#29a8e2]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="appointmentType" className="text-xl">
                Select Appointment type
              </label>
              <select
                name="appointmentType"
                id="appointmentType"
                defaultValue={''}
                className="w-full h-[52px] p-2 bg-transparent border-2 rounded-lg border-gray-300 focus:outline-none focus:border-[#29a8e2]"
              >
                <option value="" className="text-gray-400">
                  Choose one option
                </option>
                <option value="video">Video Call</option>
                <option value="physical">Physical Visit</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="comment" className="text-xl">
                Leave a message/comment
              </label>
              <textarea
                name="comment"
                id="comment"
                placeholder="Start Typing..."
                className="w-full h-[200px] p-2 bg-transparent border-2 rounded-lg border-gray-300 focus:outline-none focus:border-[#29a8e2]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full text-xl h-[52px] bg-[#29a8e2] text-white font-bold rounded-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
