import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import Swal from 'sweetalert2';

const MyForm = () => {
  const [nameOption, setNameOption] = useState("");
  const [fullName, setFullName] = useState("");
  const [date, setDate] = useState(new Date());
  const [timeOut, setTimeOut] = useState("");
  const [comment, setComment] = useState("");
  const [picture, setPicture] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
  
    let chatId;
    let botToken;
    if (nameOption === "4. Kitchen Cleaning" || nameOption === "5. Bathroom Cleaning") {
      botToken = "6183309812:AAH-cWBHOUiXWPEyU72nlafzOojW8rhEWeI";
      chatId = "-1001907004074";
    } else if (nameOption === "6. Personal QT") {
      botToken = "6617349566:AAHyFvlbMvTQL8MzpSGE-Ok8H2CpRpBBVyU";
      chatId = "-1002116287903";
    } else {
      botToken = "6522729915:AAEn3xO0gDpzcUPznx4gewhcT56bUKKTrnc";
      chatId = "-1002072072352";
    }
    
    const formData = new FormData();
    formData.append("caption", createTelegramMessage());
    formData.append("photo", picture);
  
    axios
      .post(`https://api.telegram.org/bot${botToken}/sendPhoto?chat_id=${chatId}`, formData)
      .then((response) => {
        Swal.fire({
          icon: 'success',
          title: 'Successfully Submitted!',
          text: 'Thank you for your cooperation!',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        });
      })
      .catch((error) => {
        console.error(error);
      });
  
    setNameOption("");
    setFullName("");
    setDate(new Date());
    setTimeOut("");
    setComment("");
    setPicture(null);
  };
  
  const createTelegramMessage = () => {
    let message = `
      Full Name: ${fullName.toUpperCase()}
      -Type: ${nameOption}
      -Date: ${date.toDateString(new Date())}
      -Time: ${timeOut}
      -----------------------------
      Comment: ${comment}
    `;
    return message;
  };

  return (
    <div>
      <form
        onSubmit={handleFormSubmit}
        className="bg-white drop-shadow-2xl w-5/6 sm:w-2/3 m-auto mt-5 sm:p-8 p-5 rounded-t-2xl"
      >
        <h2 className="text-lg sm:text-3xl text-pink-600 font-serif font-semibold mb-3">
          Thanks for Cooperation! 🫶
        </h2>
        <div className="mb-4">
          <label htmlFor="nameOption" className="block text-black font-medium font-sans">
            Please choose an option
          </label>
          <select
            value={nameOption}
            onChange={(e) => setNameOption(e.target.value)}
            className="w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option>Choose an option...</option>
            <option>1. Departure</option>
            <option>2. Arrival</option>
            <option>3. Late Night</option>
            <option>4. Kitchen Cleaning</option>
            <option>5. Bathroom Cleaning</option>
            <option>6. Personal QT</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="fullName" className="block text-black font-medium font-sans">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            placeholder="Your full name..."
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="date" className="block text-black font-medium font-sans">
            Pick Date
          </label>
          <DatePicker
            id="date"
            placeholderText="Pick date..."
            selected={date}
            onChange={(date) => setDate(date)}
            className="w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="timeOut" className="block text-black font-medium font-sans">
            Pick Time
          </label>
          <input
            type="time"
            id="timeOut"
            placeholder="Pick time..."
            value={timeOut}
            onChange={(e) => setTimeOut(e.target.value)}
            className="px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="picture" className="block text-black font-medium font-sans">
            Upload Picture
          </label>
          <input
            type="file"
            onChange={(e) => setPicture(e.target.files[0])}
            className="py-2 mt-1"
            accept="image/*"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="comment" className="block text-black font-medium font-sans">
            Detail:
          </label>
          <textarea
            id="comment"
            placeholder="Please provide more details following the option you've selected..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            rows="4"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="mb-5 px-4 py-2 text-white bg-blue-600 rounded hover:bg-pink-700"
        >
          Submit
        </button>
        <div className="bg-pink-700 text-center text-white drop-shadow-md p-3 mb-3 mt-3 text-xl sm:text-2xl rounded-md">
          May God Bless You! 🙏
        </div>
      </form>
    </div>
  );
};

export default MyForm;