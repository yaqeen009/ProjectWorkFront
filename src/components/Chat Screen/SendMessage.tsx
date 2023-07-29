
import { useEffect, useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import ChatBubbles from "./ChatBubbles";
import getData from "../data/DataService";
import { Message } from "postcss";

const SendMessage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");

  // Remove later
  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      if (data && data.messages) {
        setMessages(data.messages);
      }
    };
    fetchData();
  }, []);
  //

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault(); 
    if (inputMessage.trim() !== "") {
      const newMessage: Message = {
        id: new Date().getTime(),
        text: inputMessage.trim(),
        isSentByCurrentUser: true,
        type: "",
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInputMessage("");
    }
  };

  return (
    <div className="SendMessage">
      {messages.map((message) => (
        <ChatBubbles
          key={message.id}
          message={message.text}
          isSentByCurrentUser={message.isSentByCurrentUser}
          name={message.name}
          // time={message.time}
        />
      ))}
      <div className="send-message">
        <form onSubmit={handleSendMessage} className="px-2 containerWrap flex">
          <input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your message here..."
            className="input w-[39vw] h-[50px] focus:outline-none bg-white rounded-r-none px-5 text-sm border-x-2 flex-grow"
            type="text"
          />
          <button type="submit">
            <AiOutlineSend className="text-secondary-400 w-[30.50px] h-[30px] ml-3" />
          </button>
          
        </form>
      </div>
    </div>
  );
};

export default SendMessage;







