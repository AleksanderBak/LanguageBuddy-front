const chatHistory = [
  "New shoes for my birthday",
  "What is the best gift for my wife?",
  "How to make a cake?",
  "Testing 123",
  "Presidential election 2024",
];

const LeftSidebar = () => {
  return (
    <div className="bg-default-background hidden h-full max-w-[300px] flex-col items-center px-2 py-2 text-white transition-[visibility] duration-300 ease-in-out md:flex md:w-1/6 lg:w-1/5">
      <h3 className="text-2xl font-bold">History</h3>
      <ul className="flex flex-col gap-2 pt-10">
        {chatHistory.map((item, index) => {
          return (
            <li
              key={index}
              className="hover:bg-secondary-900 hover:text-secondary-300 text-secondary-200 flex w-full items-center rounded-lg p-2 select-none hover:cursor-pointer"
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftSidebar;
