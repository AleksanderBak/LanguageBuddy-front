import { useState, useEffect } from "react";
import axios from "axios";
import { IoSend } from "react-icons/io5";
import MessageBox from "./components/MessageBox";
import { Message } from "./components/MessageBox";

const ChatInput = () => {
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setChatInput(event.target.value);
  }

  function handleSendMessage() {
    let response_url: string = `http://localhost:8000/get_chat_response/${chatInput}`;

    console.log(`Sending message: ${chatInput}`);
    setChatInput("");
    setMessages((prevMessages) => [
      ...prevMessages,
      { id: prevMessages.length + 1, sender: "user", content: chatInput },
    ]);

    axios
      .get(response_url)
      .then((response) => {
        if (response.status === 200) {
          const newMessage: Message = {
            id: messages.length + 1,
            sender: "bot",
            content: String(response.data.response),
          };
          console.log("Received response:", newMessage.content);
          setMessages((prevMessages) => [...prevMessages, newMessage]);
        } else {
          console.error("Error fetching data:", response.statusText);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  return (
    <div className="bottom-4 flex h-full w-full flex-col items-center justify-between pb-10">
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

const App = () => {
  return (
    <div className="bg-secondary-950 flex h-screen w-full items-center justify-center">
      <ChatInput />
    </div>
  );
};

export default App;
