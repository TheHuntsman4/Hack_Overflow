import React from "react";
import { AiOutlineSend } from "react-icons/ai";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import logo from './assets/logo1.svg';

const Community = () => {
  const [chatList, setChatList] = useState([]);
  useEffect(() => {
    retrieveMessage();
  }, []);
  const retrieveMessage = async () => {
    try {
      const response = await axios.post(
        "https://django.biscuitbobby.me/listmessages/",
        {
          "UID": "com1",
          "CHANNEL": "channel-1"
        }
      );
      setChatList(response.data)

      // Handle the response from the server
      console.log(response.data);

      // Clear the message input
      setMessage("");
    } catch (error) {
      console.error("An error occurred while sending the message:", error);
    }
  };

  

  const [message, setMessage] = useState("");

  const handleSend = async () => {
    try {
      const response = await axios.post(
        "https://django.biscuitbobby.me/editcommunity/",
        {
          UID: "com1",
          USER_ID: "Hemanth@gmail.com",
          OPTION: "MESSAGE",
          ARG: message,
        }
      );

      // Handle the response from the server
      console.log(response.data);
      setMessage("");
      retrieveMessage();
    } catch (error) {
      console.error("An error occurred while sending the message:", error);
    }
  };

  

  
 
  return (
    <>
    <nav className='top-0 z-10 bg-[#101010] opacity-90'>
            <section className="w-full p-4 flex justify-between items-center">
                <h1 className="text-3xl font-medium text-white">
                    <a href="/"><img src={logo} className= 'h-[5%] w-[20%]'></img></a>
                </h1>
                <div>
                    <button id="mobile-open-button" className="text-3xl sm:hidden focus:outline-none">
                        &#9776;
                    </button>
                    <nav className="hidden sm:block space-x-8 text-xl" aria-label="main">
                        <a href="/profiles" className="hover:opacity-90 text-white">Profiles</a>
                        <a href="/communities" className="hover:opacity-90 text-white">Communities</a>
                        <a href="/business" className="hover:opacity-90 text-white">Businesses</a>
                        <a href="/login" className="hover:opacity-90 text-white">Sign in</a>
                        <a href="/register" className='text-sm h-10 text-white border border-white p-2'>Sign Up</a>
                    </nav>
                </div>
            </section>
        </nav>
    <div className="h-auto">
      <div className="flex">
        
        <section className="overflow-y-auto flex-1">
          <Chats chats={chatList} />
        </section>
      </div>
      <div className="flex justify-between sticky bottom-0 ">
        <input
          placeholder="Enter message"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex justify-end items-baseline border border-black w-full h-14 focus:outline-none p-5 text-xl"
        ></input>
        <button
          onClick={handleSend}
          className="border border-black w-20 text-white text-3xl flex justify-center items-center"
        >
          <AiOutlineSend />
        </button>
      </div>
    </div>
    </>
  );
};

export default Community;



const Chats = ({ chats }) => {
  return (
    <>
      {chats.map((chat) => (
        <Chat chat={chat} />
      ))}
    </>
  );
};

const Chat = ({ chat }) => {
  return (
    <div>
      <div className="mx-10 my-5 flex flex-col bg-black text-white p-5">
        <div className="text-sm">{chat['uid']}</div>
        <div className="text-xl mt-5">{chat['message']}</div>
      </div>
    </div>
  );
};