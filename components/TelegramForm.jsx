"use client"
import React, { useState } from "react";
import Cleaning from "@/components/Cleaning";
import MyForm from "@/components/MyForm";
import Image from "next/image";


const Home = () => {
  const [showQRImage, setShowQRImage] = useState(false);

  const handleToggleQRImage = () => {
    setShowQRImage(prevState => !prevState); // Toggle the showQRImage state
  };

  const handleOpenLinkInNewTab = () => {
    window.open("https://pay.ababank.com/jS7KMtYVGaRi36W39", "_blank"); // Open link in a new tab
  };

  return (
    <div className="bg-slate-500 w-5/6 md:w-2/3 m-auto mt-8 border-2 border-slate-500 rounded-t-2xl">
      
      <div className="w-full">
        <br />
        <h1 className="font-serif font-semibold text-3xl sm:text-5xl text-center text-white mt-0 mb-5 bg-slate-700 p-5 rounded-t-lg">
          PPJLC Dormitory
        </h1>
        <div className="flex items-center justify-center">
          <span className="mr-1 mb-3">{showQRImage ? "⬆️" : "⬇️"}</span>
          <h5
            className="font-serif font-semibold text-xl text-center text-yellow-300 mb-3 cursor-pointer"
            onClick={handleToggleQRImage}
          >
            Love Funding, ABA<span className="text-red-800 text-2xl">'</span>
          </h5>
          <span className="ml-1 mb-3">{showQRImage ? "⬆️" : "⬇️"}</span>
        </div>
        
        {showQRImage && (
          <div className="flex justify-center mb-3 bg-slate-700 w-2/3 sm:w-1/4 m-auto py-4 rounded-lg">
            <Image
              src="https://i.pinimg.com/736x/09/99/95/09999584ead32d2df143d409a5e01259.jpg"
              alt="Fund QR Code"
              width={200}
              height={200}
              className="rounded-2xl drop-shadow-lg cursor-pointer"
              onClick={handleOpenLinkInNewTab} // Handle click event to open link in new tab
            />
          </div>
        )}
        {/* <hr className="border-black border-1 rounded-xl w-64 m-auto" /> */}
      </div>
      <Cleaning />
      <MyForm />
      
    </div>
  );
};

export default Home;
