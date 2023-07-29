import EmojiPicker from "./EmojiPicker";
import Attachment from "./Attachment";
import SendMessage from "./SendMessage"

const ChatBox: React.FC = () => {
  return (
    <div className=" ChatBox">
      <div className="flex items-center rounded-md bg-white mt-6 px-4 py-2  ">
        <div>
          <EmojiPicker />
        </div>
        <div>
          <Attachment />
        </div>
        <div>
          <SendMessage />
        </div>
      </div>
    </div>
  );
};
export default ChatBox;
