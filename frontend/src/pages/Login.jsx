import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { login, reset } from "../features/auth/authSlice";

import Loading from "../components/Loading";

import { TbLogin, TbX } from "react-icons/tb";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, status, message } = useSelector((state) => state.auth);

  useEffect(() => {
    if (status === "rejected") {
      toast.error(message);
    }

    if (status === "fulfilled" || user) {
      navigate("/");
    }

    dispatch(reset());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, status, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  if (status === "pending") return <Loading />;

  return (
    <section className="login-banner">
      <Link to="/" className="close">
        <TbX />
      </Link>
      <div className="login-contents">
        <div className="login-card">
          <div className="login-header">
            <TbLogin />
            <h1>Login to see your profile</h1>
          </div>

          <div className="form-field">
            <form onSubmit={onSubmit}>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                placeholder="example@email.com *"
                onChange={onChange}
              />
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                placeholder="Enter your password"
                onChange={onChange}
              />
              <button type="submit">Login</button>
            </form>
          </div>

          <div className="other">
            <p>
              Don't have an account? <Link to="/register">Register</Link>
              instead!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
