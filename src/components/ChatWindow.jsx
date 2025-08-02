import React, { useState } from "react";
import ChatMessage from "./ChatMessage";
import { FaPaperPlane, FaTimes } from "react-icons/fa";
import { fetchFromDeepSeek } from "../utils/api";

export default function ChatWindow({ onClose }) {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const exampleQuestions = [
    "What is capital of India?",
    "How to apply dark mode in React?",
    "Give me some DSA questions.",
    "How to make banana shake?",
  ];

  const sendMessage = async () => {
    const trimmed = message.trim();
    if (!trimmed) return;

    const userMessage = { text: trimmed, isUser: true };
    setMessages((prev) => [...prev, userMessage]);
    setMessage("");
    setLoading(true);

    // Add temporary loading message
    const loadingMessageId = Date.now();
    setMessages((prev) => [
      ...prev,
      {
        id: loadingMessageId,
        text: "AI is typing...",
        isUser: false,
        isLoading: true,
      },
    ]);

    const chatHistory = [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: trimmed },
    ];

    const aiText = await fetchFromDeepSeek(chatHistory);

    // Replace loading message with actual AI response
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === loadingMessageId
          ? {
              ...msg,
              text: aiText || "Error fetching response.",
              isLoading: false,
            }
          : msg
      )
    );

    setLoading(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  const handleExampleClick = (text) => {
    setMessage(text);
    setTimeout(() => sendMessage(), 100);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-700 text-white">
      {/* Header */}
      <div className="bg-[#110e0ea7] px-4 py-2">
        <h2 className="text-lg font-semibold text-center">AI ChatBot</h2>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3 mb-48 text-sm ">
        {messages.length === 0 ? (
          <div className="text-sm text-gray-300">
            Try asking something like:
            <ul className="list-disc pl-5 mt-2 space-y-1">
              {exampleQuestions.map((q, i) => (
                <li
                  key={i}
                  onClick={() => handleExampleClick(q)}
                  className="cursor-pointer text-blue-300 hover:underline"
                >
                  {q}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          messages.map((msg, i) => <ChatMessage key={i} {...msg} />)
        )}
      </div>

      {/* Input */}
      <div className=" sticky bottom-0 flex items-center p-2 border-t border-gray-600">
        <input
          className="flex-1 bg-gray-600 text-white px-3 py-2 rounded-md focus:outline-none"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
        />
        <button
          onClick={sendMessage}
          disabled={!message.trim() || loading}
          className="ml-2 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-md cursor-pointer transition-colors dur3"
        >
          <FaPaperPlane fontSize="small" />
        </button>
      </div>
    </div>
  );
}
