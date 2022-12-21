import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";

function Home() {
  return (
    <div className="home" id="home">
      <Header />
      <div className="body">
        <Sidebar />
        <div className="body-contents">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
export default Home;
