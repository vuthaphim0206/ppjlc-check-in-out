"use client";

import Link from "next/link";

const Cleaning = () => {
  const handleKitchen = () => {
    window.open("https://drive.google.com/file/d/1RiCJGd4V4tDVyCDLiBgzHKuO5cxcAKrD/view?usp=sharing", "_blank");
  };
  const handleBathroom = () => {
    window.open("https://drive.google.com/file/d/11QWso9vyd6sxKufYGuXIjL7dwin91DG-/view?usp=sharing", "_blank");
  };

  return (
    <div>
      <h2 className="text-center drop-shadow-lg mt-3 mb-2 font-medium text-white text-2xl">See your schedule</h2>
      <div className="text-white w-1/2 sm:text-lg flex lg:flex-row flex-col justify-center items-center gap-5 sm:font-semibold m-auto mb-5 p-3 rounded-lg">
        <button
          onClick={handleKitchen}
          className="text-sm md:text-lg sm:text-md drop-shadow-lg px-4 py-2 bg-white text-slate-700 rounded hover:bg-slate-700 hover:text-white"
        >
              Kitchen Schedule
        </button>
        <button
          onClick={handleBathroom}
          className="text-sm md:text-lg sm:text-md drop-shadow-lg px-4 py-2 bg-slate-700 text-white rounded hover:text-slate-700 hover:bg-white"
        >
              Bathroom Schedule
        </button>
      </div>
    </div>
  );
};

export default Cleaning;