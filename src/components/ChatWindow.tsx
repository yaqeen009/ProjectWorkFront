
import ChatScreen from "./Chat Screen/ChatScreen";
import ConvoList from "./ConvoList";



const ChatWindow: React.FC = () => {
    return (
      <div className='ChatWindow'>
          <div className= 'bg-primary flex flex-row'>
              <div className="basis-1/5 my-5 mx-3">
                {/* <h1 className="text-3xl text-secondary-300 font-bold  text-center">Chats</h1> */}
                <ConvoList/>
              </div>
              <div className="basis-1/2">
                <ChatScreen/>
              </div>
              {/* <div className="basis-1/4">
              
              </div> */}
              
          </div>
      </div>

    );
  };
  
  export default ChatWindow;
  

//  
//                