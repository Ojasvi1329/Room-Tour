import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import "./ChatApp.css";

const socket = io("http://localhost:3000"); // Make sure this matches your server port

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    socket.on("chatMessage", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.off("chatMessage");
    };
  }, []);

  const handleSend = () => {
    if (input) {
      socket.emit("chatMessage", input);
      setMessages((prevMessages) => [
        ...prevMessages,
        { from: "user", text: input },
      ]);
      setInput("");
    }
  };

  return (
    <div className="chat-app">
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.from}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default ChatApp;
