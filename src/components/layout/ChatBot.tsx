"use client";
import { useState } from "react";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const calculateDelay = (text: string) => {
    // Base delay of 500ms
    const baseDelay = 500;
    // Average reading speed (characters per millisecond)
    const charsPerMs = 0.06;
    // Calculate delay based on text length
    const textDelay = Math.min(text.length / charsPerMs, 3000); // Cap at 3 seconds
    return baseDelay + textDelay;
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Show typing indicator
    setIsTyping(true);

    // Generate bot reply
    let reply = "Sorry, I didn't understand that.";
    const lower = userMessage.text.toLowerCase();

    if (lower.includes("order")) {
      reply = "Please provide your order ID, we'll check for you.";
    } else if (lower.includes("ceo")) {
      reply = "Sure! Please share your email address so we can connect you.";
    } else if (lower.includes("services")) {
      reply =
        "We provide Web Development, Mobile App Development, and Odoo ERP Solutions.";
    } else if (lower.includes("contact")) {
      reply = "Email: info@code-ox.com | Phone: +91-XXXXXXXXXX";
    }

    // Calculate delay based on reply length
    const delay = calculateDelay(reply);

    // Delay the bot reply
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
      setIsTyping(false);
    }, delay);
  };

  return (
    <div>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 bg-blue-600 text-white rounded-full p-4 shadow-lg z-50"
        >
          💬
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 w-80 bg-white shadow-lg rounded-lg flex flex-col z-50">
          {/* Header */}
          <div className="bg-blue-600 text-white p-3 flex justify-between items-center rounded-t-lg">
            <span>💬 Chat with Code-Ox</span>
            <button onClick={() => setIsOpen(false)}>✖</button>
          </div>

          {/* Messages */}
          <div className="p-3 flex-1 h-64 overflow-y-auto text-sm bg-gray-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`mb-2 ${
                  msg.sender === "user" ? "text-right" : "text-left"
                }`}
              >
                <span
                  className={`inline-block px-2 py-1 rounded ${
                    msg.sender === "user"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="text-left">
                <span className="inline-block px-2 py-1 rounded bg-gray-200 text-gray-800 italic">
                  Typing...
                </span>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-3 flex border-t bg-white">
            <input
              className="flex-1 border rounded px-2 py-1 text-sm focus:outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type your message..."
            />
            <button
              className="ml-2 bg-blue-600 text-white px-3 py-1 rounded"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
