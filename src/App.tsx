import ChatInput from "@/components/chat-input";
import Layout from "@/components/layout";

const App = () => {
  return (
    <Layout>
      <div className="flex h-full w-full flex-col gap-2 p-2">
        <div className="bg-default-background h-full w-full rounded-xl">
          <ChatInput />
        </div>
      </div>
    </Layout>
  );
};

export default App;
