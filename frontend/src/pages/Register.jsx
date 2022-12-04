import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { TbUserPlus, TbX } from "react-icons/tb";

function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { firstName, lastName, email, password, confirmPassword } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

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
