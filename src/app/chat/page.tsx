"use client";
import React from "react";
import TextArea from "../components/TextArea";

const Chat = () => {
  const [message, setMessage] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setMessage(value);
  };

  const sendMessage = (event: React.KeyboardEvent) => {
    if (event.code === "Enter" && message !== "") {
      console.log(message);
      setMessage("");
    }
  };

  return (
    <div className="flex flex-col chat-wrapper justify-between">
      <div>Content</div>
      <div className="max-w-[37.5rem]">
        <TextArea
          placeholder="Chat with the agent"
          rows={1}
          onKeyDown={sendMessage}
          onChange={handleChange}
          value={message}
        />
      </div>
    </div>
  );
};

export default Chat;
