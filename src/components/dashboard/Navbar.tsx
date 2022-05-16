import { SearchIcon, SpeakerphoneIcon, SunIcon, UserCircleIcon } from "@heroicons/react/outline";

const Navbar = () => {
  return (
    <div className="container mx-auto px-6 pt-3 flex items-center justify-between">
      <div id="search" className="border border-gray-200 rounded-md px-2 py-1 flex items-center bg-gray-200 text-gray-800">
        <input type="text" placeholder="Search" className="bg-gray-200 w-80 outline-none border-none"/>
        <button>
        <SearchIcon className="h-5 w-5" />
        </button>
      </div>
      <div className="flex gap-8">
        <SunIcon className="h-5 w-5"/>
        <SpeakerphoneIcon className="h-5 w-5"/>
        <UserCircleIcon className="h-5 w-5"/>
      </div>
    </div>
  )
};
export default Navbar;