// import { IoIosNotificationsOutline } from "react-icons/io";
import { TbLogin, TbLogout, TbUserPlus } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { reset as resetPersonalInfo } from "../features/personalInfo/personalInfoSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    dispatch(resetPersonalInfo());

    navigate("/login");
  };

  return (
    <header className="main-header">
      <div className="contents">
        <div className="logo">
          <a
            href="https://study-hitouch.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
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
          {user ? (
            <button className="logout-action action" onClick={onLogout}>
              <TbLogout /> <p>Logout</p>
            </button>
          ) : (
            <>
              {" "}
              <Link to="/login" className="sign-in action">
                <TbLogin />
                <p>Login</p>
              </Link>
              <Link to="/register" className="sign-in action">
                <TbUserPlus />
                <p>Register</p>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
export default Header;
