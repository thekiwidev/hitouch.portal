import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const loggedInUser = JSON.parse(localStorage.getItem("user"));

  const [user, setUser] = useState(loggedInUser ? loggedInUser : null);
  const [status, setStatus] = useState("pending"); // idle, pending, fulfilled, rejected
  const [message, setMessage] = useState("");

  const BASE_URL = `http://localhost:5000/api/`;

  // Sign Up User

  const signUp = (userData) => {
    fetch(`${BASE_URL}users`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => {
        setStatus("pending");
        if (res.ok) {
          return res.json();
        } else {
          setStatus("rejected");
          setMessage("SOME ERROR");
          console.log(res.json());
          return res.json();
        }
      })
      .then((data) => {
        setStatus("fulfilled");
        setUser(data);
        localStorage.setItem("user", JSON.stringify(data));
      })
      .catch((err) => {
        setStatus("rejected");
        setMessage(err.message);
      });
  };

  // Sign In User
  const signIn = (userData) => {
    fetch(`${BASE_URL}users/signin/`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => {
        setStatus("pending");
        if (res.ok) {
          return res.json();
        } else {
          setStatus("rejected");
          setMessage("SOME ERROR");
          console.log(res.json());
          return res.json();
        }
      })
      .then((data) => {
        setStatus("fulfilled");
        setUser(data);
        localStorage.setItem("user", JSON.stringify(data));
      })
      .catch((err) => {
        setStatus("rejected");
        setMessage(err.message);
      });
  };

  // Log Out a User
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, status, message, signUp, signIn, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
