// components/Modal.js
import React from "react";

export default function Modal({ show, onClose, children }) {
  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md mx-auto bg-white rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the modal
      >
        <div className="overflow-y-auto max-h-[80vh] p-4">{children}</div>
      </div>
    </div>
  );
}
