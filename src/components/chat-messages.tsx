export interface Message {
  id: number;
  sender: "user" | "bot";
  content: string;
}

const MessageComponent = ({ text, role }: { text: string; role: string }) => {
  const botStyle: string =
    "text-primary-50 max-w-3/4 self-start px-5 py-3 leading-7 tracking-wide";
  const userStyle: string =
    "bg-primary-900 text-primary-50 text-md/7 max-w-3/4 self-end rounded-lg px-5 py-3 shadow-md";

  return (
    <div className={role === "user" ? userStyle : botStyle}>
      <p>{text}</p>
    </div>
  );
};

const MessageBox = ({ messages }: { messages: Message[] }) => {
  return (
    <div className="scrollbar flex w-full justify-center overflow-auto p-4">
      <div className="flex w-3/7 flex-col gap-4">
        {messages.map((message) => {
          return message.sender === "user" ? (
            <MessageComponent
              key={message.id}
              text={message.content}
              role="user"
            />
          ) : (
            <MessageComponent
              key={message.id}
              text={message.content}
              role="bot"
            />
          );
        })}
      </div>
    </div>
  );
};

export default MessageBox;
