import React from "react";

interface ChatBubbleProps {
  name: string;
  message: string;
  isSentByCurrentUser: boolean;
  // time: Date;
}

const ChatBubbles: React.FC<ChatBubbleProps> = ({
  name,
  message,
  isSentByCurrentUser,
  // time
}) => {
  return (
    <div
      className={`flex ${
        isSentByCurrentUser ? "justify-end" : "justify-start"
      } mb-2 mx-2 `}
    >
      <div
        className={`p-3 : ${
          isSentByCurrentUser
            ? "bg-chatBubble-100 text-white rounded-l-lg rounded-br-lg"
            : "bg-chatBubble-200 text-gray-700 rounded-r-lg rounded-bl-lg"
        }`}
        style={{ maxWidth: "300px" }}
      >
        <p
          className={`${
            isSentByCurrentUser ? " text-gray-300" : "text-black-300"
          }break-words text-[9px]`}
        >
          {name}
        </p>
        <p className="break-words">{message}</p>
        {/* <p className="text-[8px]">{time.toISOString()}</p> */}
      </div>
    </div>
  );
};

export default ChatBubbles;
