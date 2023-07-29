import ChatBox from "./ChatBox";
import InfoBar from "./InfoBar";

const ChatScreen: React.FC = () => {
  return (
    <div className="ChatScreen">
      <div className="w-[50vw] h-[98vh] bg-secondary-100 rounded-[10px] mx-10 my-2 relative flex flex-col">
        <div className="basis-top">
          <InfoBar />
        </div>
        <div className="basis-[90%] overflow-y-auto mt-2 flex-col-reverse">
          
        </div>
        <div className="basis-end m-2">
          <ChatBox />
        </div>
      </div>
    </div>
  );
};
export default ChatScreen;
