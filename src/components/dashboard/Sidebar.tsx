import {ArchiveIcon, CogIcon, CreditCardIcon, CubeIcon, LoginIcon, TemplateIcon, TruckIcon, UserCircleIcon, UsersIcon} from "@heroicons/react/outline"
const Sidebar = () => {
  return (
    <div className="text-gray-300 h-screen px-5 fixed overflow-auto w-2/12">
      <div id="logo" className="py-3">
        <span className="text-2xl font-bold">belihub</span>
      </div>
      <div id="profile" className="flex gap-3 items-center">
        <img src="https://i.pravatar.cc/150?img=47" alt="" className="rounded-full w-12 shadow-md" />
        <div className="flex flex-col gap-0">
          <span className="font-bold text-lg">John Doe</span>
          <span className="font-normal text-sm">View Profile</span>
        </div>
      </div>
      <div id="list" className="py-2">
        <div id="main" className="py-3">
          <label className="font-normal text-md">MAIN</label>
          <div id="list" className="flex gap-2 px-2 sidebarActive">
            <TemplateIcon className="h-6 w-6"/>
            <span>Dashboard</span>
          </div>
        </div>
        <div id="list" className="py-2">
          <label className="font-normal text-md">LIST</label>
          <div id="list" className="flex gap-2 px-2 py-2">
            <UsersIcon className="h-6 w-6"/>
            <span>Users</span>
          </div>
          <div id="list" className="flex gap-2 px-2 py-2">
            <ArchiveIcon className="h-6 w-6"/>
            <span>Products</span>
          </div>
          <div id="list" className="flex gap-2 px-2 py-2">
            <CubeIcon className="h-6 w-6"/>
            <span>Orders</span>
          </div>
          <div id="list" className="flex gap-2 px-2 py-2">
            <CreditCardIcon className="h-6 w-6"/>
            <span>Transactions</span>
          </div>
          <div id="list" className="flex gap-2 px-2 py-2">
            <TruckIcon className="h-6 w-6"/>
            <span>Delivery</span>
          </div>
        </div>
        <div id="list" className="py-2">
          <label className="font-normal text-md">SERVICES</label>
          <div id="list" className="flex gap-2 px-2 py-2">
            <CogIcon className="h-6 w-6"/>
            <span>Packages</span>
          </div>
          <div id="list" className="flex gap-2 px-2 py-2">
            <CogIcon className="h-6 w-6"/>
            <span>Settings</span>
          </div>
        </div>
        <div id="list" className="py-2">
          <label className="font-normal text-md">USER</label>
          <div id="list" className="flex gap-2 px-2 py-2">
            <UserCircleIcon className="h-6 w-6"/>
            <span>Profile</span>
          </div>
          <div id="list" className="flex gap-2 px-2 py-2 text-red-500">
            <LoginIcon className="h-6 w-6"/>
            <span>Logout</span>
          </div>
        </div>
      </div>
    </div>
  )
};
export default Sidebar;