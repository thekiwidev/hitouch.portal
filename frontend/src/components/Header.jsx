// import { IoIosNotificationsOutline } from "react-icons/io";
import { TbLogin, TbUserPlus } from "react-icons/tb";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="main-header">
      <div className="contents">
        <div className="logo">
          <a href="https://study-hitouch.netlify.app/">
            <img
              src="https://study-hitouch.netlify.app/assets/logo-black.png"
              alt="Hitouch global ltd"
            />
          </a>
        </div>
        <div className="active-page">
          <p>Dashboard</p>
        </div>
        <div className="sign-in-out">
          <Link to="/login" className="sign-in action">
            <p>Login</p>
            <TbLogin />
          </Link>
          <Link to="/register" className="sign-in action">
            <p>Register</p>
            <TbUserPlus />
          </Link>
        </div>
      </div>
    </header>
  );
}
export default Header;
