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

    // Format the data to be sent to the Telegram bot
    const message = `
    Full Name: ${fullName.toUpperCase()}
     -Type: ${nameOption}
     -Date: ${date.toDateString(new Date())}
     -Time: ${timeOut}
     -----------------------------
    Comment: ${comment}
    `;
    // Arrival Date: ${arrivalDate.toDateString(new Date())}
     // Time: ${timeIn}

    // Set your Telegram bot token and chat ID
    const botToken = "6522729915:AAEn3xO0gDpzcUPznx4gewhcT56bUKKTrnc";
    const chatId = "-1002072072352";

    // Send the message to the Telegram bot
    axios
      .post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        chat_id: chatId,
        text: message,
      })
      .then((response) => {
        // Handle the response if needed
        console.log(response.data);
      })
      .catch((error) => {
        // Handle errors if any
        console.error(error);
      });

    // Reset the form fields after submission
    setNameOption("");
    setFullName("");
    setDate(new Date());
    // setArrivalDate(new Date());
    setTimeOut("");
    // setTimeIn("");
    setComment("");
  };

  return (
      <div>
        <form
          onSubmit={handleFormSubmit}
          className="bg-pink-400 drop-shadow-xl w-5/6 sm:w-2/3 m-auto mt-5 p-5 rounded-t-2xl"
        >
          <h2 className="text-xl sm:text-2xl text-green-800 font-serif font-semibold mb-3">
            Check-In & Check-Out Form
          </h2>
          <div className="mb-4">
          <label htmlFor="nameOption" className="block text-black font-medium font-sans ">
              Departure, Arrival or Late?
          </label>
            <select value={nameOption}
              
              onChange={(e) => setNameOption(e.target.value)}
              className="w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required>
              <option>please select option...</option>
              <option>1. Departure</option>
              <option>2. Arrival</option>
              <option>3. Late Night</option>
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
            className="mb-5 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
  );
};

export default MyForm;
