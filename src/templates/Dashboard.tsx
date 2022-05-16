import Navbar from "../components/dashboard/Navbar";
import Sidebar from "../components/dashboard/Sidebar";

type Props = {
  children: JSX.Element
}

const Dashboard = ({children}: Props) => {
  return (
    <div className="flex text-gray-700">
      <div className="bg-zinc-700 w-2/12">
        <Sidebar/>
      </div>
      <div className="h-screen w-10/12">
        <Navbar/>
        {children}
      </div>
    </div>
  )
};
export default Dashboard;