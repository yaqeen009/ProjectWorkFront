import SearchChatList from "./SearchChatsList";
import React, { useState } from "react";

const ConvoListGroup: React.FC = () => {
  const [clickedIndex, setClickedIndex] = useState(-1);

  const handleElementClick = (index: number) => {
    setClickedIndex(index);
  };

  return (
    <div className="ConvoListGroup h-[50vh] mb-8 flex flex-col">
      {/* A flex box for the top side("Chat" and "groups") and the contact lists(Group& indiv) */}
      <div>
        <div className="flex flex-col space-y-14 bg-primary">
          <div className="flex-none h-24 bg-red-200">
            <div className="flex flex-col space-y-7">
              {/* I have got some margin works to do here */}
              <h1 className="text-3xl text-secondary-300 font-bold text-center ml-2 md:ml-0">Chats</h1>
              <h2 className="text-left text-base font-normal ml-8 ">Groups</h2>
            </div>
            <div className="basis-1/2">
              <SearchChatList />
            </div>
          </div>

          {/* the contact lists */}
          <div className="overflow-y-auto w-80 h-[36vh] bg-primary">
            <div className="flex-none h-24  space-y-0 ">
              {Array.from({ length: 5 }, (_, i) => (
                <a key={i} className="block border-b">
                  <div
                    className={`border-l-2 ${
                      clickedIndex === i ? "border-secondary-600 bg-secondary-600" : "border-transparent hover:bg-gray-100"
                    } space-y-3 p-3`}
                    onClick={() => handleElementClick(i)}
                  >
                    {/* I have to put space-x-2 down to make space btn the avatar and the name */}
                    <div className="flex flex-row items-center space-x-2">
                      {/* I will put Avatar over here */}
                      <div className="rounded-full bg-black w-12 h-12 "></div>
                      <strong className="flex-grow text-sm">Marketing Mavericks</strong>
                      <div className="text-sm">Time</div>
                    </div>
                    <div className="flex flex-row bg-red-200">
                      <div className="truncate text-xs">some message</div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* I Added the ConvoListIndiv component here */}
      {/* <div className="flex-grow overflow-y-auto bg-secondary"><ConvoListIndividual /></div> */}
    </div>
  );
};

export default ConvoListGroup;
