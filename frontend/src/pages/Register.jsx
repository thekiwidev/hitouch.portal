import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../features/auth/authSlice";

import { TbUserPlus, TbX } from "react-icons/tb";

import Loading from "../components/Loading";
import { useDispatch, useSelector } from "react-redux";
function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { firstName, lastName, email, password, confirmPassword } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, status, message } = useSelector((state) => state.auth);

  useEffect(() => {
    if (status === "rejected") {
      toast.error(message);
    }
    if (user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, message, status, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passowrds do not match");
    } else {
      const userData = {
        firstName,
        lastName,
        email,
        password,
      };

      dispatch(register(userData));
    }
  };

  if (status === "pending") {
    return <Loading />;
  }

  return (
    <div className="signup-banner">
      <Link to="/" className="close">
        <TbX />
      </Link>
      <div className="signup-contents">
        <div className="signup-card">
          <div className="signup-header">
            <TbUserPlus />
            <h1>Register to get started</h1>
          </div>

          <div className="form-field">
            <form onSubmit={onSubmit}>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={firstName}
                placeholder="First Name*"
                onChange={onChange}
              />
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={lastName}
                placeholder="Last Name*"
                onChange={onChange}
              />
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                placeholder="example@email.com*"
                onChange={onChange}
              />
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                placeholder="Enter a password*"
                onChange={onChange}
              />
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={confirmPassword}
                placeholder="Re-Enter the same password*"
                onChange={onChange}
              />
              <button type="submit">Sign up</button>
            </form>
          </div>

          <div className="other">
            Already have an account <Link to="/login">Login</Link>.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
