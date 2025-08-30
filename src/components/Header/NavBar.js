import { useContext } from 'react';
import { IoBookSharp } from "react-icons/io5";
import { MdOutlineClear } from "react-icons/md";
import {SearchContext} from "../SearchContext"


const NavBar = () => {
  const { searchInput, setSearchInput } = useContext(SearchContext);

  const onUserInput = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <nav className="bg-gray-900 text-white w-full h-20 flex items-center px-4 md:px-10">
      <div className="flex items-center gap-2 text-2xl font-bold">
        <IoBookSharp className="text-blue-400 text-3xl" />
        <span className="hidden sm:inline">BookFinder</span>
      </div>
      <div className="flex-grow flex justify-center">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Find your book..."
            value={searchInput}
            onChange={onUserInput}
            className="w-full px-4 py-2 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-400 hover:text-blue-300"
          >
            {searchInput && <MdOutlineClear onClick={() =>setSearchInput("")}/>}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
