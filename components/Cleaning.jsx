"use client";
import TelegramForm from "./TelegramForm";
const Cleaning = () => {
  const handleKitchen = () => {
    window.open(
      "https://drive.google.com/file/d/1RiCJGd4V4tDVyCDLiBgzHKuO5cxcAKrD/view?usp=sharing",
      "_blank"
    );
  };
  const handleBathroom = () => {
    window.open(
      "https://drive.google.com/file/d/11QWso9vyd6sxKufYGuXIjL7dwin91DG-/view?usp=sharing",
      "_blank"
    );
  };
  const handleQT = () => {
    window.open(
      "https://docs.google.com/spreadsheets/d/1viFRtkOiYQTDe5j_suHyGqZGIa0wEFYC3eOW-nHQCt0/edit#gid=505184866",
      "_blank"
    );
  };

  return (
    <div className="bg-slate-700 rounded-t-lg p-3">
      <TelegramForm />

      {/* <h2 className="text-center drop-shadow-lg mt-3 mb-2 pt-2 font-medium text-white text-2xl">
        See what you want to...
      </h2>
      <div className="text-white w-1/2 sm:text-lg flex justify-center items-center gap-3 sm:font-semibold m-auto p-3 rounded-lg">
        <button
          onClick={handleKitchen}
          className="text-sm md:text-lg sm:text-md drop-shadow-lg px-4 py-2 bg-white text-slate-700 rounded hover:bg-slate-700 hover:text-white"
        >
          Kitchen
        </button>
        <button
          onClick={handleBathroom}
          className="text-sm md:text-lg sm:text-md drop-shadow-lg px-4 py-2 bg-white text-slate-700 rounded hover:bg-slate-700 hover:text-white"
        >
          Bathroom
        </button>
      </div>
      <div className="text-white w-1/2 sm:text-lg flex lg:flex-row flex-col justify-center items-center gap-5 sm:font-semibold m-auto mb-5 rounded-lg">
        <button
          onClick={handleQT}
          className="text-sm md:text-lg sm:text-md px-4 py-2 bg-slate-500 text-white rounded-t-lg hover:border-2 border-slate-500 hover:bg-slate-700"
        >
          QT Attendace
        </button>
      </div> */}
    </div>
  );
};

export default Cleaning;
