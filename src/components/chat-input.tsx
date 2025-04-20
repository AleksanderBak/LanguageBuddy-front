import { useState, useEffect } from "react";
import { IoSend } from "react-icons/io5";
import MessageBox from "@/components/chat-messages";

import { Message } from "@/components/chat-messages";

const ChatInput = () => {
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setChatInput(event.target.value);
  }

  function handleSendMessage() {
    console.log("Sending message:", chatInput);
    // const socket = new WebSocket("ws://localhost:8080/chat_ws");
    // const messageToSend = chatInput;

    // setMessages((prevMessages) => [
    //   ...prevMessages,
    //   { id: messages.length, sender: "user", content: chatInput },
    // ]);
    // setChatInput("");

    // let botMessage: string = "";
    // const botMessageId = messages.length + 1;

    // setMessages((prevMessages) => [
    //   ...prevMessages,
    //   { id: botMessageId, sender: "bot", content: "" },
    // ]);

    // socket.addEventListener("open", () => {
    //   socket.send(messageToSend);
    // });

    // socket.addEventListener("message", (event) => {
    //   botMessage += event.data;

    //   // Update the bot's message live
    //   setMessages((prevMessages) =>
    //     prevMessages.map((msg) =>
    //       msg.id === botMessageId ? { ...msg, content: botMessage } : msg,
    //     ),
    //   );
    // });

    // socket.addEventListener("close", () => {
    //   console.log("WebSocket closed");
    // });

    // socket.addEventListener("error", (e) => {
    //   console.error("WebSocket error", e);
    // });
  }

  return (
    <div className="bottom-4 flex h-full w-full flex-col items-center justify-between px-4 pb-10">
      <MessageBox messages={messages} />

      <div className="bg-secondary-800 flex w-full max-w-2xl items-center justify-between overflow-clip rounded-[24px]">
        <input
          type="text"
          placeholder="What would you like to talk about?"
          className="caret-primary-300 placeholder:text-secondary-300 w-full p-2 px-5 py-2 font-normal text-white focus:outline-none"
          value={chatInput}
          onChange={handleInputChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSendMessage();
            }
          }}
        />
        <button
          className="text-secondary-950 hover:text-secondary-700 p-2 pr-5 transition-all duration-200 ease-in-out hover:cursor-pointer"
          onClick={() => handleSendMessage()}
        >
          <IoSend size={24} />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
