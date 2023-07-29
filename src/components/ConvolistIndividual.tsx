import SearchChatList from "./SearchChatsList";
import React, { useState } from "react";

const ConvoListIndividual: React.FC = () => {
  
const [clickedIndex, setClickedIndex] = useState(-1);
const handleElementClick = (index: number) => {
    setClickedIndex(index);
}
    return (
        <div className='ConvoListIndividual '>
        {/* A flex box for the top side("Chats") and the contact lists(Group& indiv) */}
        <div className="space-y-4">
          <div className=' flex flex-col  bg-primary'>
  
            <div className="flex-none space-y-0 bg-red-200">
                <h2 className="text-left text-base font-normal ml-8 ">Chats</h2>
              </div>
              <div className="basis-1/2"><SearchChatList /></div>
            </div>
  
            {/* the contact lists  */}
            {/* <div className="flex h-[50vh] bg-primary">
          <div className="flex-none h-24 w-80 space-y-0 "> */}

            <div className="flex-auto overflow-y-auto w-80 h-[30vh]">
            {Array.from({ length: 5 }, (_, i) => (
             <a key={i} className="block border-b">
                  <div
                    className={`border-l-2 ${
                      clickedIndex === i ? "border-blue-500 bg-green-100" : "border-transparent hover:bg-gray-100"
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
    );
};


export default ConvoListIndividual;