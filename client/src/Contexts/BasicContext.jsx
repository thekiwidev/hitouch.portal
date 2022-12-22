import { createContext, useState } from "react";

const BasicContext = createContext();

export function BasicProvider({ children }) {
  const [status, setStatus] = useState("idle"); // idle, pending, fulfilled, rejected

  const BASE_URL = `http://localhost:5000/api/`;

  // Get Info

  const getInfo = (userData) => {
    fetch(`${BASE_URL}info`, {
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
          //  setStatus("rejected");
          //  setMessage("SOME ERROR");
          console.log(res.json());
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        setStatus("fulfilled");
        //    setUser(data);
        //    localStorage.setItem("user", JSON.stringify(data));
      })
      .catch((err) => {
        console.log(err);
        setStatus("rejected");
        //    setMessage(err.message);
      });
  };

  return (
    <BasicContext.Provider value={{ status, getInfo }}>
      {children}
    </BasicContext.Provider>
  );
}
export default BasicContext;
