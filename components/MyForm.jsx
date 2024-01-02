"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const MyForm = () => {
  const [fullName, setFullName] = useState("");
  const [date, setDate] = useState(new Date());
  const [arrivalDate, setArrivalDate] = useState(new Date());
  const [timeOut, setTimeOut] = useState("");
  const [timeIn, setTimeIn] = useState("");
  const [comment, setComment] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Format the data to be sent to the Telegram bot
    const message = `
      Full Name: ${fullName}
      Departure Date: ${date.toDateString()}
      Arrival Date: ${arrivalDate.toDateString()}
      Time Out: ${timeOut}
      Time In: ${timeIn}
      Comment: ${comment}
    `;

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
    setFullName("");
    setDate(new Date());
    setArrivalDate(new Date());
    setTimeOut("");
    setTimeIn("");
    setComment("");
  };

  return (
    <div>
      <div className="flex justify-center gap-20">
        <form
          onSubmit={handleFormSubmit}
          className="bg-orange-200 w-80 p-5 rounded-2xl"
        >
          <h2 className="text-2xl text-gray-700 font-sans font-medium mb-3">
            Check-Out Form
          </h2>
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-700">
              Departure Date
            </label>
            <DatePicker
              id="date"
              selected={date}
              onChange={(date) => setDate(date)}
              className="w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="arrivalDate" className="block text-gray-700">
              Arrival Date
            </label>
            <DatePicker
              id="arrivalDate"
              selected={arrivalDate}
              onChange={(date) => setArrivalDate(date)}
              className="w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="timeOut" className="block text-gray-700">
              Time Out
            </label>
            <input
              type="time"
              id="timeOut"
              value={timeOut}
              onChange={(e) => setTimeOut(e.target.value)}
              className="w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="timeIn" className="block text-gray-700">
              Time In
            </label>
            <input
              type="time"
              id="timeIn"
              value={timeIn}
              onChange={(e) => setTimeIn(e.target.value)}
              className="w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="comment" className="block text-gray-700">
              Comment
            </label>
            <textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="4"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
        <form
          onSubmit={handleFormSubmit}
          className="bg-orange-200 w-80 p-5 rounded-2xl"
        >
          <h2 className="text-2xl text-gray-700 font-sans font-medium mb-3">
            Check-In Form
          </h2>
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-700">
              Departure Date
            </label>
            <DatePicker
              id="date"
              selected={date}
              onChange={(date) => setDate(date)}
              className="w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="arrivalDate" className="block text-gray-700">
              Arrival Date
            </label>
            <DatePicker
              id="arrivalDate"
              selected={arrivalDate}
              onChange={(date) => setArrivalDate(date)}
              className="w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="timeOut" className="block text-gray-700">
              Time Out
            </label>
            <input
              type="time"
              id="timeOut"
              value={timeOut}
              onChange={(e) => setTimeOut(e.target.value)}
              className="w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="timeIn" className="block text-gray-700">
              Time In
            </label>
            <input
              type="time"
              id="timeIn"
              value={timeIn}
              onChange={(e) => setTimeIn(e.target.value)}
              className="w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="comment" className="block text-gray-700">
              Comment
            </label>
            <textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="4"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyForm;
