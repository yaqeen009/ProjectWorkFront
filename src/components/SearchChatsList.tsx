
const SearchChatList: React.FC = ()=>{
    return (
        <div className="SearchChatList">
           
           <div className="input-wrapper  drop-shadow-lg">
             <div className="search-bar flex flex-row items-center space-x-13">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 absolute ml-14 opacity-50">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197M5.196 5.196A7.5 7.5 0 1015.803 15.803a7.5 7.5 0 00-10.607-10.607z" />
                </svg>
                <input type="text" placeholder="Search Chats..." className="text-base text-secondary-300 ml-12  pl-9  py-2 font-light focus:outline-none rounded-lg" /> 
            </div>
         </div>
        </div>
    )
}
export default SearchChatList;