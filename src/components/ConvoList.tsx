import ConvoListGroup from "./ConvolistGroup"
import ConvoListIndividual from "./ConvolistIndividual"
// import SearchChatList from "./SearchChatsList";

const ConvoList: React.FC = ()=>{

    return(
        <div className="flex flex-col">
            <div className="basis-1/2"><ConvoListGroup/></div>
            {/* <div className="basis-1/2"><SearchChatList/></div> */}
            <div className="basis-1/2"><ConvoListIndividual/></div>
            {/* <div className="basis-1/2"><SearchChatList/></div> */}
        </div>
    )
}
export default ConvoList;