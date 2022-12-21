import { Link } from "react-router-dom";
import { TbLogin, TbUserPlus } from "react-icons/tb";
function Header() {
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
          <Link to="/signin" className="sign-in action">
            <TbLogin />
            <p>Login</p>
          </Link>
          <Link to="/signup" className="sign-up action">
            <TbUserPlus />
            <p>Register</p>
          </Link>
        </div>
      </div>
    </header>
  );
}
export default Header;
