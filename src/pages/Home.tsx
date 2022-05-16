import { UsersIcon } from "@heroicons/react/outline";
import {Card, CardContent, CardTitle}from "../components/Card";
import Dashboard from "../templates/Dashboard";

const Home = () => {
  return (
    <Dashboard>
      <div className="container mx-auto px-6 pt-3">
        <h1 id="title" className="font-bold text-2xl">Dashboard</h1>
        <div id="content" className="flex">
          <Card>
            <>
            <CardTitle>
              <>
                <UsersIcon className="w-5 h-5" />
                <span className="font-bold text-lg">Users</span>
              </>
            </CardTitle>
            <CardContent>
              <span>23243</span>
            </CardContent>
            </>
          </Card>
        </div>
      </div>
    </Dashboard>
  )
}
export default Home;