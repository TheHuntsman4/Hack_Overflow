import React from "react";
import { AiOutlineSend } from "react-icons/ai";

const Community = () => {
  

  const channelsList = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const chatList = [{ time: "2:00 AM", sender: "sharan", message: "Hello, Let's have a nice Chat!" },
  { time: "12:00 AM", sender: "sharan", message: "Hello, Let's have a nice Chat!" },
  { time: "12:30 AM", sender: "sharan", message: "Hello, Let's have a nice Chat!" },
  { time: "1:00 AM", sender: "sharan", message: "Hello, Let's have a nice Chat!" },
  { time: "1:30 AM", sender: "sharan", message: "Hello, Let's have a nice Chat!" },
  { time: "2:00 AM", sender: "sharan", message: "Hello, Let's have a nice Chat!" },
  { time: "2:30 AM", sender: "sharan", message: "Hello, Let's have a nice Chat!" },
  { time: "3:00 AM", sender: "sharan", message: "Hello, Let's have a nice Chat!" }, ];

  return (
    <div className="h-[100vh]">
      <div className="flex">
        <section className="bg-[#212121] min-w-[250px] max-w-[250px] flex flex-col border border-black ">
          <div className="flex justify-center items-center text-white h-20">
            Channels
          </div>
          <Channels channelsList={channelsList} />
        </section>
        <section className="overflow-y-auto flex-1">
          <Chats chats={chatList} />
        </section>
      </div>
      <div className="flex justify-between mt-[80vh] bottom-0 sticky">
        <input
          placeholder="Enter message"
          type="text"
          className="flex justify-end items-baseline border border-black w-full h-14 focus:outline-none p-5 text-xl"
        ></input>
        <button className="border border-black w-20 text-white text-3xl flex justify-center items-center">
          <AiOutlineSend />
        </button>
      </div>
    </div>
  );
};

export default Community;

const Channels = ({ channelsList }) => {
    function channelChange(channel) {
        window.location.href = `/channel=${channel}`
    }
  return (
    <>
      {channelsList.map((channel) => (

        <button onClick={() => channelChange(channel)} key={channel}>
          <Channel channelData={channel} />
        </button>
      ))}
    </>
  );
};

const Channel = ({ channelData }) => {
  return (
    <div className="text-white border border-black border-collapse h-12 flex justify-center items-center">
      {channelData}
    </div>
  );
};

const Chats = ({ chats }) => {
  return (
    <>
      {chats.map((chat) => (
        <Chat chat={chat} key={chat.time} />
      ))}
    </>
  );
};

const Chat = ({ chat }) => {
  return (
    <div>
      <div className="mx-10 my-5 flex flex-col bg-black text-white p-5">
        <div className="text-sm">
            {chat.sender}
        </div>
        <div className="text-xl mt-5">
            {chat.message}
        </div>
        <div className="text-end -mt-5 opacity-80">
            {chat.time}
        </div>
      </div>
    </div>
  );
};
