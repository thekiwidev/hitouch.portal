import { TbClipboardList, TbMoodSmile, TbLayout2 } from "react-icons/tb";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Sidebar() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="sidebar">
      <div className="contents">
        <Link to="/user" className="user">
          <div className="user-dp">
            <TbMoodSmile className="icon" />
          </div>
          <div className="greet-user">
            <h3>Hi, {user.name}</h3>
          </div>
        </Link>
        <div className="tab-links">
          <Link to="/" className="tab-item">
            <TbLayout2 className="tab-icon" />
            <p>Dashboard</p>
          </Link>
          <Link to="/userinfo/basic" className="tab-item">
            <TbClipboardList className="tab-icon" />
            <p>User Info</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
