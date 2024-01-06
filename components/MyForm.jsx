"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const MyForm = () => {
  const [nameOption, setNameOption] = useState("");
  const [fullName, setFullName] = useState("");
  const [date, setDate] = useState(new Date());
  // const [arrivalDate, setArrivalDate] = useState(new Date());
  const [timeOut, setTimeOut] = useState("");
  // const [timeIn, setTimeIn] = useState("");
  const [comment, setComment] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    let chatId;
    if (nameOption === "4. Kitchen Cleaning" || "5. Bathroom Cleaning") {
      // Set your Telegram bot token and chat ID for Cleaning option
      const botTokenCleaning = "6183309812:AAH-cWBHOUiXWPEyU72nlafzOojW8rhEWeI";
      chatId = "-4089040065";
      
      // Send the message to the Telegram bot for Cleaning option
      axios
        .post(`https://api.telegram.org/bot${botTokenCleaning}/sendMessage`, {
          chat_id: chatId,
          text: createTelegramMessage(),
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      // Set your Telegram bot token and chat ID
      const botToken = "6522729915:AAEn3xO0gDpzcUPznx4gewhcT56bUKKTrnc";
      chatId = "-1002072072352";
      
      // Send the message to the Telegram bot
      axios
        .post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          chat_id: chatId,
          text: createTelegramMessage(),
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }

    // Reset the form fields after submission
    setNameOption("");
    setFullName("");
    setDate(new Date());
    setTimeOut("");
    setComment("");
  };

  const createTelegramMessage = () => {
    const message = `
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
            Thanks for Cooperation!🫶
          </h2>
          <div className="mb-4">
          <label htmlFor="nameOption" className="block text-black font-medium font-sans ">
              Please choose an option
          </label>
            <select value={nameOption}
              
              onChange={(e) => setNameOption(e.target.value)}
              className="w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required>
              <option>option...</option>
              <option>1. Departure</option>
              <option>2. Arrival</option>
              <option>3. Late Night</option>
              <option>4. Kitchen Cleaning</option>
              <option>5. Bathroom Cleaning</option>
            </select>
          </div>
          {/* <div className="mb-4">
            <label htmlFor="nameOption" className="block text-gray-700">
              Departure or Arrival?
            </label>
            <input
              type="text"
              id="nameOption"
              value={nameOption}
              onChange={(e) => setNameOption(e.target.value)}
              className="w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div> */}
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-black font-medium font-sans ">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="your full name..."
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="date" className="block text-black font-medium font-sans ">
              Pick Date
            </label>
            <DatePicker
              id="date"
              placeholderText="pick date..."
              selected={date}
              onChange={(date) => setDate(date)}
              className="w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="timeOut" className="block text-black font-medium font-sans ">
              Pick Time
            </label>
            <input
              type="time"
              id="timeOut"
              placeholder="pick time..."
              value={timeOut}
              onChange={(e) => setTimeOut(e.target.value)}
              className=" px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* <hr className="m-auto w-64 h-px bg-green-900 border-0" />
          <div className="m-auto w-full text-md font-sans font-medium text-gray-700">Arrival Option</div>
          <hr className="m-auto w-64 h-px bg-green-900 border-0" /> */}

          {/* <div className="mb-4">
            <label htmlFor="arrivalDate" className="block text-gray-700">
              Arrival Date
            </label>
            <DatePicker
              id="arrivalDate"
              selected={arrivalDate}
              onChange={(date) => setArrivalDate(date)}
              className="w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            
            />
          </div> */}

          {/* <div className="mb-4">
            <label htmlFor="timeIn" className="block text-gray-700">
              Arrival Time
            </label>
            <input
              type="time"
              id="timeIn"
              value={timeIn}
              onChange={(e) => setTimeIn(e.target.value)}
              className="w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              
            />
          </div> */}

          <div className="mb-4">
            <label htmlFor="comment" className="block text-black font-medium font-sans">
              Detail:
            </label>
            <textarea
              id="comment"
              placeholder="please provide more details following the option you've selected..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className=" w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
          <div className="bg-pink-700 text-center text-white drop-shadow-md p-3 mb-3 mt-3 text-xl sm:text-2xl rounded-md">May God Bless You!</div>
        </form>
      </div>
  );
};

export default MyForm;
