interface Message {
  id: number;
  sender: "user" | "bot";
  content: string;
}

const UserMessage = ({ text }: { text: string }) => {
  return (
    <div className="bg-primary-900 text-primary-50 text-md/7 max-w-3/4 self-end rounded-lg px-5 py-3 shadow-md">
      <p>{text}</p>
    </div>
  );
};

const BotMessage = ({ text }: { text: string }) => {
  return (
    <div className="text-primary-50 max-w-3/4 self-start px-5 py-3 leading-7 tracking-wide">
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
            <UserMessage key={message.id} text={message.content} />
          ) : (
            <BotMessage key={message.id} text={message.content} />
          );
        })}
      </div>
    </div>
  );
};

export default MessageBox;
