import React, { useState } from "react";
import { FaRobot, FaTimes } from "react-icons/fa";
import ChatWindow from "./ChatWindow";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat window */}
      {isOpen && (
        <div className="absolute bottom-14 right-0 w-[350px] max-h-[500px] bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <ChatWindow onClose={() => setIsOpen(false)} />
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-700 text-white p-3 rounded-full shadow-lg hover:scale-110 transition cursor-pointer"
      >
        {isOpen ? <FaTimes size={18} /> : <FaRobot size={18} />}
      </button>
    </div>
  );
}
