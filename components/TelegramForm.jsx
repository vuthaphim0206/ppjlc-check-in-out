// components/TelegramForm.js
import { useState } from "react";
import axios from "axios";
import Modal from "./Modal";

export default function TelegramForm() {
  const [formData, setFormData] = useState({
    name: "",
    tel: "",
    telegramUsername: "",
    studyYear: "",
    hasBibleGroup: "No",
    groupLeaderName: "",
    dayAndTime: "",
    material: "",
    comment: "",
  });

  const [showBibleGroupFields, setShowBibleGroupFields] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "hasBibleGroup") {
      setShowBibleGroupFields(value === "Yes");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const message = `
      Full Name: ${formData.name.toUpperCase()}
      -Tel: ${formData.tel}
      -Telegram Username: ${formData.telegramUsername}
      -Study Year: ${formData.studyYear}
      -Do you have Bible Group? = ${formData.hasBibleGroup}
      ${
        formData.hasBibleGroup === "Yes"
          ? `
      -Group Leader Name: ${formData.groupLeaderName}
      -Day and Time: ${formData.dayAndTime}
      -Material: ${formData.material}`
          : ""
      }
      ---------------------
      Comment: ${formData.comment}
    `;

    const TELEGRAM_API_URL = `https://api.telegram.org/bot7095311763:AAGFF28LXSRXpnetoQVSBRB3NNv-piyB8rk/sendMessage`;
    const CHAT_ID = "-4257924532";

    try {
      await axios.post(TELEGRAM_API_URL, {
        chat_id: CHAT_ID,
        text: message,
      });
      alert("Form submitted successfully");
      setShowModal(false); // Close modal on success
    } catch (error) {
      console.error("Error sending message to Telegram", error);
      alert("Failed to submit form");
    }
  };

  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        className="flex items-center justify-center m-auto py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Click to show Small Group Form
      </button>

      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <h2 className="text-lg sm:text-3xl text-blue-600 font-serif font-semibold mb-3">
          Small Group Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your full name..."
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Tel
            </label>
            <input
              type="tel"
              name="tel"
              placeholder="Your phone number..."
              value={formData.tel}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Telegram Username
            </label>
            <input
              type="text"
              name="telegramUsername"
              placeholder="Your telegram username..."
              value={formData.telegramUsername}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Study Year
            </label>
            <input
              type="text"
              name="studyYear"
              placeholder="Your study level..."
              value={formData.studyYear}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Do you have Bible Group?
            </label>
            <select
              name="hasBibleGroup"
              value={formData.hasBibleGroup}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>

          {showBibleGroupFields && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Group Leader Name
                </label>
                <input
                  type="text"
                  name="groupLeaderName"
                  placeholder="Your group leader name"
                  value={formData.groupLeaderName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Day and Time
                </label>
                <input
                  type="text"
                  name="dayAndTime"
                  placeholder="Ex: Sunday, at 12:00 pm"
                  value={formData.dayAndTime}
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Material
                </label>
                <input
                  type="text"
                  name="material"
                  placeholder="Material you learn in small group..."
                  value={formData.material}
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Details
            </label>
            <textarea
              name="comment"
              placeholder="Tell us more details..."
              value={formData.comment}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
