import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState("pending"); // idle, pending, fulfilled, rejected
  const [message, setMessage] = useState("");

  // Sign Up User

  const signUp = (userData) => {
    fetch(`http://localhost:5000/api/users`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => {
        setStatus("pending");
        console.log(res);
        if (res.ok) return res.json();
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
    fetch(`http://localhost:5000/api/users/signin/`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => {
        setStatus("pending");
        console.log(res);
        return res.json();
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
