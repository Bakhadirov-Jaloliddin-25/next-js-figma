import React from 'react'

const Contact = () => {
  return (
    <div className="container mx-auto mt-20 text-center pb-[140px]">
      <h2 className="text-[44px] leading-[52px] font-semibold mb-4">
        Have Question in Mind? <br />
        Let us help you
      </h2>
      <form className="mt-9 space-y-4 max-w-[637px] m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your phone number"
            className="outline-none border border-pink-300 px-[25px] py-[29px] rounded"
          />
          <input
            type="text"
            placeholder="Question type"
            className="outline-none border border-pink-300 px-[25px] py-[29px] rounded"
          />
        </div>
        <div className="flex">
          <input
            type="text"
            placeholder="Enter your question"
            className="outline-none flex-grow border border-pink-300 px-[25px] py-[29px] rounded-l"
          />
          <button
            type="submit"
            className="bg-pink-500 text-white px-[25px] py-[29px] rounded-r hover:bg-pink-600 transition"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact