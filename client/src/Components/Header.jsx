import { Link, useNavigate } from "react-router-dom";
import { TbLogin, TbUserPlus } from "react-icons/tb";
import { useContext } from "react";
import AuthContext from "../Contexts/AuthContext";
import BasicContext from "../Contexts/BasicContext";
function Header() {
  const navigate = useNavigate();

  const { user, logout } = useContext(AuthContext);
  const { reset } = useContext(BasicContext);

  const onLogout = () => {
    logout();
    reset();
    navigate("/signin");
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

        <div className="buttons">
          {user ? (
            <button className="action" onClick={onLogout}>
              Logout
            </button>
          ) : (
            <>
              <Link to="/signin" className="sign-in action">
                <TbLogin />
                <p>Login</p>
              </Link>
              <Link to="/signup" className="sign-up action">
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
